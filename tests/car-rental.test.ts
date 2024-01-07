import { Builder, By, WebDriver } from "selenium-webdriver";
import { CarRental } from "../core/page-objects/car_rental-page";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let carRental: CarRental;


beforeAll(async () => {
    driver = await createDriver(testData.url.Booking);
    carRental = new CarRental(driver);
},10000);


   //write tests here

   test("add name of your test here", async () => {
    await carRental.clickXButton();                            //we are exiting genius notification(sometimes will activate, sometimes not)


   
    await carRental.clickcarRentalOpt();



    await carRental.clickPickupInputBar();


    await carRental.inputInBar();


    await carRental.clickSarairprt();



    await carRental.clickPickupDateBar();



    await carRental.clickPickupDate();



    await carRental.clickPickupTimeBar();



    await carRental.clickPickupTime();



    await carRental.clickDropoffDateBar();



    await carRental.clickDropoffDate();



    await carRental.clickDropoffTimeBar();



    await carRental.clickDropoffTime();



    await carRental.clickSearchButton();



    await carRental.findfinalPage();
},20000);





afterAll(async () => {
    await quitDriver(driver);
},10000);