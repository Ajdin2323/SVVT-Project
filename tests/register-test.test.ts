import { Builder, By, WebDriver } from "selenium-webdriver";
import {Register} from "../core/page-objects/register-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let register: Register;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    register = new Register(driver);
},10000);

//tests here:

test("add name of your test here", async () => {
    
    await register.clickXButton();                         //we are exiting genius notification(sometimes will activate, sometimes not)

    await register.clickRegisterButton();

    await register.clickMailInputField();

    await register.fillMail();

    await register.clickContinueButton();

    await register.clickPassInputField();

    await register.fillPass();

    await register.clickSignInButton();


    
},20000);




afterAll(async () => {
    await quitDriver(driver);
},10000);