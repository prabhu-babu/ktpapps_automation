import { Page, expect } from "@playwright/test";
import BasePage from "../BasePage";

export class ClassPage extends BasePage {
  private readonly hamburgerMenu;
  private readonly classLink;
  private readonly classTitle;
  private readonly classTextBox;
  private readonly applyButton;

  constructor(page: Page) {
    super(page);
    this.hamburgerMenu = this.page.getByLabel("Menu");
    this.classLink = this.page.locator("#liClass");
    this.classTitle = this.page.locator(".header-title");
    this.classTextBox=this.page.locator("#tbClassName");
    this.applyButton=this.page.getByText("APPLY");
  }

  async clickHamburgerMenu() {
    await this.clickAndVerify(this.hamburgerMenu, "Hamburger link", this.classLink, "Class")
  }

  async navigateToClass() {
    await this.clickAndVerify(this.classLink, "Class Link", this.classTitle.first(), "Class - Search")
  }

  async searchClass(value: string){
    await this.fillField(this.classTextBox, "Class Text Box", value);
    await this.clickElement(this.applyButton, "APPLY Button");
  }
}
