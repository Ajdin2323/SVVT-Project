import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class Flights extends BasePage {
    private x_btn = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']//span[@class='eedba9e88a']//span[@class='fcd9eec8fb bf9a32efa5']");
    private flights_btn = By.xpath("//a[@id='flights']") 
    private from_btn = By.xpath("//div[@class='zEiP-formField zEiP-origin']//div[@class='lNCO-inner']")
    private ToPlusBtn = By.xpath("//div[@class='zEiP-formField zEiP-destination']//div[@class='lNCO-icon lNCO-suffix-icon']//div[@class='XaZ4-icon ']")
    private to_btn = By.xpath("//input[@class='k_my-input']")
    private cover_btn = By.xpath("//div[@class='keel-container s-t-bp']")
    private from_date_btn = By.xpath("//div[@class='PDPe-from']")
    private btn_15_feb = By.xpath("//div[@aria-label='Thursday February 15, 2024']")
    private to_date_btn = By.xpath("//div[@class='PDPe-to']")
    private btn_14_mar = By.xpath("//div[@aria-label='Thursday March 14, 2024']")
    private search_btn = By.xpath("//div[@class='Iqt3-button-content']")

    constructor(driver: WebDriver) {
        super(driver);
    }
//add functions here

async clickXBtn(){
    await this.findElementAndClick(this.x_btn);
}

async clickFlightsBtn() {
    await this.findElementAndClick(this.flights_btn);
}

async fillFromBtn() {
    await this.fillInputField(this.from_btn, testData.name.from_city)
}

async clickToBtn() {
    await this.findElementAndClick(this.ToPlusBtn);
}

async fillToBtn() {
    await this.fillInputField(this.to_btn, "Sarajevo, Bosina and Herzegovina (SJJ)")
}

async clickCoverBtn() {
    await this.findElementAndClick(this.cover_btn);
}

async clickFromDateBtn() {
    await this.waitAndClick(this.from_date_btn, 5000);
}

async click15thFeb() {
    await this.findElementAndClick(this.btn_15_feb);
}

async clickToDateBtn() {
    await this.findElementAndClick(this.to_date_btn);
}

async click14thMar() {
    await this.findElementAndClick(this.btn_14_mar);
}
async clickSearchBtn() {
    await this.findElementAndClick(this.search_btn);
}


}
