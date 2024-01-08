import { Builder, By, WebDriver } from "selenium-webdriver";
import { TravelArticles } from "../core/page-objects/travel_articles-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let travelArticles: TravelArticles;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    travelArticles = new TravelArticles(driver);
},10000);


   //write tests here
   test("add name of your test here", async () => {
    await travelArticles.clickXButton();                           //we are exiting genius notification(sometimes will activate, sometimes not)
    
    //await travelArticles.ClickthreeLines();

    await travelArticles.ClicktravelArticle(); 

    await travelArticles.findfinalPage();
                                                                
},20000);




afterAll(async () => {
    await quitDriver(driver);
},10000);


