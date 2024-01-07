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
    private ToXBtn = By.xpath("//div[@class='zEiP-formField zEiP-destination']//div[@class='lNCO-icon lNCO-suffix-icon']//div[@class='XaZ4-icon ']")
    private to_btn = By.xpath("//div[@class='zEiP-formField zEiP-destination']//div[@class='lNCO-inner']")

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

async clickToXBtn() {
    await this.findElementAndClick(this.ToXBtn);
}

async fillToBtn() {
    await this.fillInputField(this.ToXBtn, testData.name.to_city)
}

}
