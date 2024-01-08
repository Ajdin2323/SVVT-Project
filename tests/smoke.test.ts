import { Builder, By, WebDriver } from "selenium-webdriver";
import { Smoke } from "../core/page-objects/smoke-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let smoke: Smoke;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    smoke = new Smoke(driver);
},10000);


   //write tests here
   test("add name of your test here", async () => {
    
    await smoke.clickXButton();                           //we are exiting genius notification(sometimes will activate, sometimes not)
    await smoke.clickDestinationButon();
    await smoke.clickMostar();
    await smoke.clickCheckDateButton();
    //await smoke.clickCheckInDate();  
    //await smoke.clickCheckOutDate();   
    await smoke.clickPersonsButton();  
    await smoke.clickDoneButton(); 
    await smoke.clickSearchButton(); 
    await smoke.clickHotel();
    await smoke.clickReserveButton();
    await smoke.clickShowPricesButton();             //this is the end scince we cannot do anything else since we are not registered
    
                                                        
},100000);





afterAll(async () => {
    await quitDriver(driver);
},10000);