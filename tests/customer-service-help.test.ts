import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { CustomerServiceHelp } from "../core/page-objects/customer-service-help";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let customerServiceHelp: CustomerServiceHelp;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    customerServiceHelp = new CustomerServiceHelp(driver);
},40000);


test("add name of your test here", async () => {
   //write tests here
    await customerServiceHelp.clickXBtn();
    await customerServiceHelp.clickHelpBtn();
    //await customerServiceHelp.scrolling();
    await customerServiceHelp.continueWithoutAccount();
    await customerServiceHelp.confirm();
},40000);


afterAll(async () => {
    await quitDriver(driver);
},40000);