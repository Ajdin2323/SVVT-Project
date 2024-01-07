import { Builder, By, WebDriver } from "selenium-webdriver";
import { Attractions } from "../core/page-objects/attractions";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let attractions: Attractions;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    attractions = new Attractions(driver);
},20000);


test("add name of your test here", async () => {
   //write tests here
    //await signout.clickAccTab();
    await attractions.clickXBtn();
    await attractions.clickAttrBtn();
    await attractions.choseCity();
    await attractions.clickCity();
    await attractions.choseDate();
    await attractions.clickDate();
    //await attractions.fillDate();
    await attractions.selectSearch();
},20000);


afterAll(async () => {
    await quitDriver(driver);
},20000);