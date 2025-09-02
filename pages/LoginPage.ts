import { Page } from "@playwright/test";
import {loginSelectors} from "../constants/selectors/login.selectors"

export class LoginPage {

    constructor(private page:Page) {
        this.page = page;
    }

async goto(){
    await this.page.goto('/');
}

// async getTitle(){
//     return this.page.title();
// }

async mainlogin(emailaddress:string, password:string){
    await this.page.locator(loginSelectors.emailInput).fill(emailaddress);
    await this.page.locator(loginSelectors.passwordInput).fill(password);
    await this.page.locator(loginSelectors.loginButton).click();
    
}
}