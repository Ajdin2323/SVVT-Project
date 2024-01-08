import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));



export class TravelArticles extends BasePage {
    private xButton = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 ab98298258 deab83296e f4552b6561']");
    private threeLines = By.xpath("//button[@class='a83ed08757 c21c56c305 f38b6daa18 d691166b09 f671049264 deab83296e fd3248769f']");
    private travelArticle = By.xpath("//a[@category='articles-link']");//("//a[@href='https://www.booking.com/articles.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaBKIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4ApDf66wGwAIB0gIkNzZkMWVjNzctZThhMi00M2U1LWE0OTAtOGFjM2JlNDE5YmRh2AIF4AIB&sid=9c222f19c18740e88c7b7059606be4c3']//div[@class='aca0ade214 ebac6e22e9 c2931f4182 e7d9f93f4d d79e71457a']");
    private finalPage = By.xpath("//div[@class='af8fbdf136 dd7683a6b4']");
    
    constructor(driver: WebDriver) {
        super(driver);
    }
    //functions here:

    async clickXButton(){
        await this.findElementAndClick(this.xButton);
    }

    async ClickthreeLines(){
        await this.findElementAndClick(this.threeLines);                      /*Notice the "bug" here. When the window is maximized three lines doesnt exist
                                                                              But when its minimized it is there.
                                                                              That's why I will do this function by scrolling to bottom of the main page and finding travel article button*/     
    }

    async ClicktravelArticle(){
        await this.findElement(this.travelArticle);
        await this.navigate(testData.url.travelarticle);
    }

    async findfinalPage(){
        await this.checkMatchingElements(this.finalPage, testData.text.expectedText1);            
    }

}