import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class CustomerServiceHelp extends BasePage {
    private x_btn = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']//span[@class='eedba9e88a']//span[@class='fcd9eec8fb bf9a32efa5']");
    private help_btn = By.xpath("//span[@class='f419a93f12']//span[@class='eedba9e88a']")
    private continue_btn = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 f671049264 d2529514af bb803d8689']")
    private confirm_btn = By.xpath("//div[@class='f829e04eec e6208ee469']//div[@class='aca0ade214 cc8c279dac cd2e7d62b0']")
    constructor(driver: WebDriver) {
        super(driver);
    }
//add functions here

async clickXBtn(){
    await this.findElementAndClick(this.x_btn);
}

async clickHelpBtn() {
    await this.findElementAndClick(this.help_btn);
}

async continueWithoutAccount() {
    await this.scrollSto();
    await this.findElementAndClick(this.continue_btn);
}

async confirm() {
    await this.checkMatchingElements(this.confirm_btn, testData.name.confirm_mess);
}



}
