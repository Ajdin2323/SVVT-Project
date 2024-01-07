import { Builder, By, WebDriver } from "selenium-webdriver";
import { ChangeCurrency } from "../core/page-objects/changing-currency";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let changecurrency: ChangeCurrency;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    changecurrency = new ChangeCurrency(driver);
},30000);


test("add name of your test here", async () => {
   //write tests here
    //await signout.clickAccTab();
    await changecurrency.clickXBtn();
    await changecurrency.clickCurrencyBtn();
    await changecurrency.choseCurrency();
    await changecurrency.checkCurrency();
},30000);


afterAll(async () => {
    await quitDriver(driver);
},20000);