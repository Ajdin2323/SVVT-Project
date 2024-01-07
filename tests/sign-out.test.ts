import { Builder, By, WebDriver } from "selenium-webdriver";
import { SignOut } from "../core/page-objects/sign-out";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let signout: SignOut;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    signout = new SignOut(driver);
},20000);


test("add name of your test here", async () => {
   //write tests here
    //await signout.clickAccTab();
    await signout.clickXBtn();
},20000);


afterAll(async () => {
    await quitDriver(driver);
},20000);