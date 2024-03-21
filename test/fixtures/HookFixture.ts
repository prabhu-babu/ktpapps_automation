import { test as baseTest } from "@playwright/test";
import { Env } from "../config/Env";
import log from "../config/Log";
import { ClassPage } from "../pages/goldmine/ClassPage";
import BasePage from "../pages/BasePage";

type Pages = {
  classPage: ClassPage;
};

type Data = {
  testData: string;
};

const test = baseTest.extend<Pages, Data>({
  // pages
  classPage: async ({ page }, use) => {
    await use(new ClassPage(page));
  },

  // test data
  testData: require(`../testdata/testData.${Env.ENV}.json`),
});

test.beforeEach(async ({ page, classPage }) => {
  const basePage = new BasePage(page);

  log.info("Setup started.");
  await basePage.navigateTo(Env.URL_GOLDMINE);
  await classPage.clickHamburgerMenu();
  log.info("Setup completed.");
});

test.afterEach(async ({ page }) => {
  await page.close();
  log.info("Tear down completed.");
});

export default test;
export const expect = test.expect;
