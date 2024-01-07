import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class QAPlanner extends BasePage {

    private xButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']");
    private OutdoorsTab = By.xpath("//li[@class='d37611a2e0']/button[@class='a83ed08757 f3441ccb97 ec66406250' and @aria-controls='NATURE_ACTIVE']");
    private Blagaj = By.xpath("/html/body/div[4]/div/div[1]/div[6]/div[9]/div/div/div/div[3]/div/ul/li[5]/a/div/div[2]/div[1]");
    
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    //functions here:

    async clickXButton(){
        await this.findElementAndClick(this.xButton);
    }

    async clickOutdoorsTab(){
        await this.findElementAndClick(this.OutdoorsTab);
    }

    async clickBlagaj(){
        await this.findElementAndClick(this.Blagaj);
    }



}