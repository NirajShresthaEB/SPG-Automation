import { Page } from "@playwright/test";
import { dashboardSelectors } from "../constants/selectors/dashboard.selectors"

export interface entadmData {

    entname: string;
    entemail: string;
    entphone: string;
    admname: string;
    admtitle: string;
    admemail: string;
    admphone: string;

}

export class DashboardPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async loginasEntPrincipal() {

        await this.page.getByRole('button', { name: 'Entity Management' }).click();
        await this.page.getByRole('button', { name: 'Create New Entity' }).click();
        await this.page.waitForTimeout(5000);
    }

    async addEntity(data: entadmData) {

        const entinput = this.page.getByPlaceholder('Enter email');

        await this.page.getByPlaceholder('Enter Entity Name').fill(data.entname);
        await this.page.getByLabel('Entity Phone').click();
        await this.page.getByLabel('Entity Phone').fill(data.entphone);
        await entinput.nth(0).fill(data.entemail)

        await this.page.getByPlaceholder('Enter Full Name').fill(data.admname);


        await entinput.nth(1).fill(data.admemail);
        await this.page.getByPlaceholder('Admin Contact*').fill(data.admphone);

        await this.page.waitForTimeout(10000);






        //   await this.page.locator('.MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1o7w87h').getByPlaceholder('Enter email').fill(data.entemail);


        // await this.page.locator(dashboardSelectors.entName).fill(data.entname);
        // await this.page.locator(dashboardSelectors.entEmail).fill(data.entemail);


    }

}




// const page1Promise = this.page.waitForEvent('popup');
// await this.page.getByRole('button', { name: 'Yes' }).click();




