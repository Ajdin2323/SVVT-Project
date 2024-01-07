import { Builder, By, WebDriver } from "selenium-webdriver";
import {LanguageChange} from "../core/page-objects/changing_language-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let languageChange: LanguageChange;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    languageChange = new LanguageChange(driver);
},10000);

//tests here:

test("add name of your test here", async () => {
    await languageChange.clickXButton();                //we are exiting genius notification(sometimes will activate, sometimes not)

    await languageChange.clicklangButton();

    await languageChange.clickchangeButton();

    /*await languageChange.findLanguage();*/               /*Does not work, I cannot see the issue, I checked 100 times. I even checked by adding picture adress 
                                                        and checking if its the right one, but it doesnt work. Every other test can be done*/
},20000);




afterAll(async () => {
    await quitDriver(driver);
},10000);
