import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { DashboardPage } from '@pages/dashboardPage';

test('basic test', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await login.goto();
  await login.loginadmin('testsuperjunfive@yopmail.com','5965f8ad1b96');

  await page.waitForTimeout(5000);


  await dashboard.loginasEntPrincipal();


  await page.waitForTimeout(5000);


  console.log("Hello");




  

});










  // const title = await login.getTitle();
  // expect(title).toContain('SPG - Specialist Protection Group');

  // // await page.goto('https://stage-webapp.vinobid.com.au/');
  // // await expect(page).toHaveTitle(/VinoBid/);