import { Page } from "@playwright/test";
import {dashboardSelectors} from "../constants/selectors/dashboard.selectors"

export class DashboardPage {
    readonly page: Page;

    constructor(page:Page){
        this.page = page;
    }

    async loginasEntPrincipal(){

        await this.page.getByRole('button', { name: 'Entity Management' }).click();  
        await this.page.getByRole('row', { name: 'Test Entity 2 Dummy Entity 2' }).getByRole('button').first().click();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('button', { name: 'Yes' }).click();


    

}

    }