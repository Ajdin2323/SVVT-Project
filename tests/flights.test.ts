import { Builder, By, WebDriver } from "selenium-webdriver";
import { Flights } from "../core/page-objects/flights";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let flights: Flights;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    flights = new Flights(driver);
},20000);


test("add name of your test here", async () => {
   //write tests here
    await flights.clickXBtn();
    await flights.clickFlightsBtn();
    //await flights.fillFromBtn();
    await flights.clickToBtn();
    await flights.fillToBtn();
    await flights.clickCoverBtn();
    await flights.clickFromDateBtn();
    await flights.click15thFeb();
    await flights.clickToDateBtn();
    await flights.click14thMar();
    await flights.clickSearchBtn();

},20000);


afterAll(async () => {
    await quitDriver(driver);
},20000);