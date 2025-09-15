import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage, entadmData } from '../pages/dashboardPage';
import { generateRandomEmail } from '../utils/utils';
import entityData from '../data/entityData.json';

test('basic test', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  //storing the function 'generateRandomEmail' inside radommEmail variable
  const randomEmail = generateRandomEmail();


  const inputData : entadmData = { ...entityData.newEntity, entemail:randomEmail, admemail:randomEmail};

  //calling methods of loginPage class

  await login.goto();
  await login.mainlogin('testsuperjunfive@yopmail.com','5965f8ad1b96');
  


  //calling methods of dashboardPage class

  await dashboard.loginasEntPrincipal();

  await dashboard.addEntity(inputData);

  await dashboard.loginasNewEntity();


});










  // const title = await login.getTitle();
  // expect(title).toContain('SPG - Specialist Protection Group');

  // // await page.goto('https://stage-webapp.vinobid.com.au/');
  // // await expect(page).toHaveTitle(/VinoBid/);