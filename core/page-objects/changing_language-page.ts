import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class LanguageChange extends BasePage {
    private xButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']");
    private langButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 f671049264 deab83296e fd3248769f' and @data-testid='header-language-picker-trigger']");
    private changeButton = By.xpath("//div[@data-testid='Suggested for you']//button[@class='a83ed08757 aee4999c52 ffc914f84a c39dd9701b ac7953442b'][1]");   //bitno//
    /*private checkLanguage = By.xpath("//h1");*/
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    //functions here:
    async clickXButton(){
        await this.findElementAndClick(this.xButton);
    }

    async clicklangButton(){
        await this.findElementAndClick(this.langButton);
    }

    async clickchangeButton(){
        await this.findElementAndClick(this.changeButton);
    }

    /*async findLanguage(){
        await this.checkMatchingElements(this.checkLanguage, testData.text.expectedtextq);      
    }    */
}
