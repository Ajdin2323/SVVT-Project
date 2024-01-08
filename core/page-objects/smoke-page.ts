import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class Smoke extends BasePage {
    private xButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']");
    private destinationButton = By.xpath("//input[@class='eb46370fe1']");
    private mostar = By.xpath("//li[@id='autocomplete-result-3']//div[@class='d7430561e2']");
    private checkDateButton = By.xpath("//div[@class='f73e6603bf']");
    private checkInDate = By.xpath("//span[@data-date='2024-01-16']");
    private checkOutDate = By. xpath("//span[@data-date='2024-01-19']");
    private personsButton = By. xpath("//button[@data-testid='occupancy-config']");
    private doneButton = By. xpath("//button[@class='a83ed08757 c21c56c305 bf0537ecb5 ab98298258 d2529514af af7297d90d c213355c26']");
    private searchButton = By.xpath("//button[@class='a83ed08757 c21c56c305 a4c1805887 f671049264 d2529514af c082d89982 cceeb8986b']");
    //private hotel = By.xpath("//a[@href='https://www.booking.com/hotel/ba/mostar.html?label=gen173nr-1FCAEoggI46AdIM1gEaBKIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AoDc8KwGwAIB0gIkZWJiMjVjNDItN2MwMC00ODU5LWJkYTYtN2NkYWU3NzliZWVm2AIF4AIB&aid=304142&ucfs=1&arphpl=1&dest_id=-89574&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&srpvid=76de79875c3a0746&srepoch=1704734247&from_sustainable_property_sr=1&from=searchresults#hotelTmpl'][1]");
    private reserveButton = By.xpath("//button[@data-et-click='goal:hp_d_reserve_button_top_of_hp_clicked']");
    private showPricesButton = By.xpath("//button[@class='a83ed08757 c21c56c305 a4c1805887 ab98298258 d2529514af c082d89982 js-legacy-price-button'][1]");
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    //functions here:

    async clickXButton(){
        await this.findElementAndClick(this.xButton);
    }
    async clickDestinationButon(){
        await this.findElementAndClick(this.destinationButton);
    }
    async clickMostar(){
        await this.findElementAndClick(this.mostar);
    }
    async clickCheckDateButton(){
        await this.findElementAndClick(this.checkDateButton);
    }
    async clickCheckInDate(){
        await this.waitAndClick(this.checkInDate,10000);  
    }
    async clickCheckOutDate(){
        await this.waitAndClick(this.checkOutDate,10000);
    }
    async clickPersonsButton(){
        await this.waitAndClick(this.personsButton,1000);
    }
    async clickDoneButton(){
        await this.findElementAndClick(this.doneButton);
    }
    async clickSearchButton(){
        await this.findElementAndClick(this.searchButton);
    }
    async clickHotel(){
        await this.scrollToElement
        await this.navigate(testData.url.other);
    }
    async clickReserveButton(){
        await this.findElementAndClick(this.reserveButton);
    }
    async clickShowPricesButton(){
        await this.waitAndClick(this.showPricesButton,10000);
    }

   


    



    
}