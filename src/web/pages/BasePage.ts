import { Locator, Page, expect } from "@playwright/test";
import log from "../../config/Log";

export default class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // method to navigate to a URL
  async navigateTo(url: string) {
    await this.page.goto(url);
    log.info("URL : '" + url + "' launched.");
  }

  // method to click element
  async clickElement(element: Locator, fieldName: string) {
    try {
      await element.waitFor();
      await element.highlight();
      await element.click();
      log.info(fieldName + " clicked.");
    } catch (error) {
      log.error(`Error clicking the field : ` + fieldName + `. Element : ${element} . ${error}`);
    }
  }

  // method to click element and verify
  async clickAndVerify(element: Locator, fieldName: string, verifyElement: Locator, expectedValue: string) {
    try {
      await element.waitFor();
      await element.highlight();
      await element.click();
      await expect(verifyElement).toContainText(expectedValue);
      log.info(fieldName + " clicked and verified.");
    } catch (error) {
      log.error(`Error for the field : ` + fieldName + `. Element : ${element} . ${error}`);
    }
  }

  // method to fill field
  async fillField(element: Locator, fieldName: string, value: string) {
    try {
      await element.waitFor();
      await element.highlight();
      await element.clear();
      await element.fill(value);
      log.info(fieldName + " filled with the value '" + value + "'");
    } catch (error) {
      log.error(`Error filling the field : ` + fieldName + `. Element : ${element} . ${error}`);
    }
  }

  // method to read text from an element
  async getElementText(element: Locator, fieldName: string): Promise<string> {
    try {
      await element.waitFor();
      await element.highlight();
    } catch (error) {
      log.error(`Error getting text for the field : ` + fieldName + `. Element : ${element} . ${error}`);
    }
    log.info("Value '" + element.innerText() + "' read from the field " + fieldName);
    return element.innerText();
  }
}
