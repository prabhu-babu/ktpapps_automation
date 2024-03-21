import test from "../../fixtures/HookFixture";

test(
  "validate goldmine search",
  { tag: ["@goldmine", "@class", "@smoke", "@regression"] },
  async ({classPage, testData}) => {
    await classPage.navigateToClass();
    await classPage.searchClass(testData.goldmine.classCode);
  }
);
