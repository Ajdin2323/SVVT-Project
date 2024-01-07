import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class CarRental extends BasePage {
    private xButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']");
    private carRentalOption = By.xpath("//a[@id='cars']");
    private PickupLocInputBar = By.xpath("//input[@id='searchbox-toolbox-fts-pickup']");
    private SarAirprt = By.xpath("//div[@class='searchbox-toolbox-fts__suggestion searchbox-toolbox-fts__suggestion--A']");
    private PickupDateBar = By.xpath("//button[@id='searchbox-toolbox-date-picker-pickup-date']/div[@class='LPCM_0f8663aa LPCM_c2b8b4a2 LPCM_bc4094d4 LPCM_67ca44d6 sbc-fl-button__stack']");
    private PickupDate = By.xpath("//span[@class='LPCM_3d00354f LPCM_f34a5d0a LPCM_688ad363']");
    private PickupTimeBar = By.xpath("//select[@class='LPCM_58238e23 sbc-fl-timepicker__input']");
    private PickupTime = By.xpath("//select[@id='searchbox-toolbox-pickup-time']/option[@value='00:00']");
    private DropoffDateBar = By.xpath("//button[@id='searchbox-toolbox-date-picker-dropoff-date']");
    private DropoffDate = By.xpath("//span[@data-date='2024-01-14']");
    private DropoffTimeBar = By.xpath("//select[@id='searchbox-toolbox-dropoff-time']");
    private DropoffTime = By.xpath("//select[@id='searchbox-toolbox-pickup-time']/option[@value='10:00']");
    private SearchButton = By.xpath("//button[@class='LPCM_df109d05 LPCM_c0d38fd7 LPCM_defb32ed LPCM_5cfef599 LPCM_12e14d72 LPCM_53c48e06 submit-button']");
    private FinalOutcome = By.xpath("//div[@class='SM_1d3aafe8']");


    
    constructor(driver: WebDriver) {
        super(driver);
    }
    //functions here:

    async clickXButton(){
        await this.findElementAndClick(this.xButton);
    }

    async clickcarRentalOpt(){
        await this.findElementAndClick(this.carRentalOption);
    }

    async clickPickupInputBar(){
        await this.findElementAndClick(this.PickupLocInputBar);
    }

    async inputInBar(){
        await this.fillInputField(this.PickupLocInputBar, "Sarajevo International Airport (SJJ)");
    }

    async clickSarairprt(){
        await this.findElementAndClick(this.SarAirprt);
    }

    async clickPickupDateBar(){
        await this.findElementAndClick(this.PickupDateBar);
    }

    async clickPickupDate(){
        await this.findElementAndClick(this.PickupDate)
    }

    async clickPickupTimeBar(){
        await this.findElementAndClick(this.PickupTimeBar)
    }

    async clickPickupTime(){
        await this.findElementAndClick(this.PickupTime)
    }

    async clickDropoffDateBar(){
        await this.findElementAndClick(this.DropoffDateBar)
    }

    async clickDropoffDate(){
        await this.findElementAndClick(this.DropoffDate)
    }

    async clickDropoffTimeBar(){
        await this.findElementAndClick(this.DropoffTimeBar)
    }

    async clickDropoffTime(){
        await this.findElementAndClick(this.DropoffTime)
    }

    async clickSearchButton(){
        await this.findElementAndClick(this.SearchButton)
    }

    async findfinalPage(){
        await this.checkMatchingElements(this.FinalOutcome, testData.text.expectedText2);
    }

    
}
