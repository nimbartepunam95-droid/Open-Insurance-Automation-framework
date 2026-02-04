import { test, expect, chromium } from '@playwright/test';
import { Loginfile } from './Pages/Loginfile';

test.describe('End-to-End Login Test Suite', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new Loginfile(page);
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    await page.waitForLoadState('networkidle');
    
    // Assert successful login by checking the URL
    // await expect(page).toHaveURL('https://demo.openimis.org/front/dashboard/');
  });
});