import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { DashboardPage } from '@pages/dashboardPage';

test('basic test', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  //calling methods of loginPage class

  await login.goto();
  await login.mainlogin('testsuperjunfive@yopmail.com','5965f8ad1b96');


  //calling methods of dashboardPage class

  await dashboard.loginasEntPrincipal();


});










  // const title = await login.getTitle();
  // expect(title).toContain('SPG - Specialist Protection Group');

  // // await page.goto('https://stage-webapp.vinobid.com.au/');
  // // await expect(page).toHaveTitle(/VinoBid/);