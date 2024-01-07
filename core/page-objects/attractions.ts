import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class Attractions extends BasePage {
    private x_btn = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']//span[@class='eedba9e88a']//span[@class='fcd9eec8fb bf9a32efa5']");
    private attractionsbtn = By.xpath("//a[@id='attractions']")
    private chose_city = By.xpath("//input[@name='query']")
    private mostar_btn = By.xpath("//li[@class='css-9dv5ti'][1]//a[@city='mostar']//div[@class='css-1h7anqn']")
    private chose_date = By.xpath("//div[@class='css-10zpq3d']") 
    private date_btn = By.xpath("//span[@data-date='2024-01-07']")
    private fill_date_btn = By.xpath("//div[@class='css-10zpq3d']")
    private search_btn = By.xpath("//button[@type='submit']//span[@class='e4adce92df']")
    private page = By.xpath("//h4[@data-testid='card-title']")
    
    constructor(driver: WebDriver) {
        super(driver);
    }
//add functions here

async clickXBtn(){
    await this.findElementAndClick(this.x_btn);
}

async clickAttrBtn() {
    await this.findElementAndClick(this.attractionsbtn);
}

async choseCity() {
    await this.fillInputField(this.chose_city, "Mostar");
}
async clickCity() {
    await this.findElementAndClick(this.mostar_btn);
}

async choseDate() {
    await this.findElementAndClick(this.chose_date);
}
async clickDate() {
    await this.findElementAndClick(this.date_btn);
}
/*async fillDate() {
    await this.fillInputField(this.fill_date_btn, "7.sij");
}*/

async selectSearch() {
    await this.findElementAndClick(this.search_btn);
}

async checkPage() {
    await this.checkMatchingElements(this.page, testData.name.nameAddr);
}





}
