import { Builder, By, WebDriver } from "selenium-webdriver";
import {QAPlanner} from "../core/page-objects/quickeasyplanner-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let qa_Planner: QAPlanner;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    qa_Planner = new QAPlanner(driver);
},20000);

//tests here:

test("add name of your test here", async () => {
    await qa_Planner.clickXButton();                    //we are exiting genius notification(sometimes will activate, sometimes not)
 
    await qa_Planner.clickOutdoorsTab();                   

    await qa_Planner.clickBlagaj();                  
},20000);
    
 






afterAll(async () => {
    await quitDriver(driver);
},10000);