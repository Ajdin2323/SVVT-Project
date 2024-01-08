import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class Register extends BasePage {
    private xButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']");
    private registerButton = By.xpath("//a[@data-testid='header-sign-up-button']");
    private mailInputField = By.xpath("//input[@class='ZMH9h0HCYH9GGNxHnXGJ']");
    private ContinueButton = By.xpath("//button[@class='Iiab0gVMeWOd4XcyJGA3 wPxWIS_rJCpwAWksE0s3 Ut3prtt_wDsi7NM_83Jc TuDOVH9WFSdot9jLyXlw EJWUAldA4O1mP0SSFXPm whxYYRnvyHGyGqxO4ici']");
    private passInputField = By.xpath("//input[@class='ZMH9h0HCYH9GGNxHnXGJ']");
    private SignInButton = By.xpath("//button[@class='Iiab0gVMeWOd4XcyJGA3 wPxWIS_rJCpwAWksE0s3 Ut3prtt_wDsi7NM_83Jc TuDOVH9WFSdot9jLyXlw EJWUAldA4O1mP0SSFXPm whxYYRnvyHGyGqxO4ici']");
    private titlecheck = By.xpath("//div[@class='a3332d346a a6a383700c'][1]");
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    //functions here:
    async clickXButton(){
        await this.findElementAndClick(this.xButton);
    }
    async clickRegisterButton(){
        await this.findElementAndClick(this.registerButton);
    }
    async clickMailInputField(){
        await this.findElementAndClick(this.mailInputField);
    }
    async fillMail(){
        await this.fillInputField(this.mailInputField, testData.data.mail);
    }
    async clickContinueButton(){
        
        await this.findElement(this.ContinueButton);
        await this.navigate(testData.url.pass);
    }
    async clickPassInputField(){
        await this.findElementAndClick(this.passInputField);
    }
    async fillPass(){
        await this.fillInputField(this.passInputField, testData.data.pass);
    }
    async clickSignInButton(){
        await this.findElement(this.SignInButton);
        await this.navigate(testData.url.final);
    }
    async checkMatchingElements(){
        await this.checkTitle(this.titlecheck, testData.text.title);
    }
 
    

    //sometimes problem with "continue button"

}