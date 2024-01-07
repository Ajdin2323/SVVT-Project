import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class ChangeCurrency extends BasePage {
    private x_btn = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']//span[@class='eedba9e88a']//span[@class='fcd9eec8fb bf9a32efa5']");
    private currency_btn = By.xpath("//div[@class='aca0ade214 aaf30230d9 c2931f4182 e7d9f93f4d faf8b5d9a5'][1]//span[@class='f419a93f12'][1]//span[@class='e4adce92df']");
    private select_currency = By.xpath("//*[@id='b2indexPage']/div[19]/div/div/div/div/div[2]/div/div[2]/div/div/ul[1]/li[1]/button/div/div[1]/span/div");
    private checked_currency = By.xpath("//span[@class='f419a93f12'][1]//span[@class='e4adce92df']");

    constructor(driver: WebDriver) {
        super(driver);
    }
//add functions here

async clickXBtn(){
    await this.findElementAndClick(this.x_btn);
}

async clickCurrencyBtn(){
    await this.findElementAndClick(this.currency_btn);
}

async choseCurrency(){
    await this.waitForElement(this.select_currency, 10000); 
    await this.findElementAndClick(this.select_currency);
}

async checkCurrency(){
    await this.checkMatchingElements(this.checked_currency, testData.name.true_currency);
}


}