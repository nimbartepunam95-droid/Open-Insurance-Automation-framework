import { test, expect } from '@playwright/test';
import { Loginfile } from './Pages/Loginfile';

test.describe('End-to-End Login Test Suite', () => {
  let loginPage: Loginfile;

  test.beforeEach(async ({ page }) => {
    loginPage = new Loginfile(page);
    await loginPage.navigateToLoginPage;
  });

  test('Successful Login Test', async () => {
    await loginPage.login('Admin', 'admin123');
    // Add assertions here to verify successful login
    await expect(loginPage.loginButton.page()).toHaveURL('https://demo.openimis.org/front/dashboard/');
  });
});   

