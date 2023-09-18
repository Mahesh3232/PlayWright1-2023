const {test, expect} = require('@playwright/test')

test("Verify the login functionality with valid credentials",async ({page})=>{
    //step 1 nevigate to the URl
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //step 2 Enter the Username 
    await page.locator('input[name="username"]').fill('Admin')
    //<input id ="One" class ="User">Username</input>
    //tagname[attr=value]
    //input[id="One"]
    //step 3  enter password
    
    await page.locator('input[name="password"]').fill('admin123')
    //step 4 click on login button 
    await page.locator('button[type="submit"]').click()
    //Step 5 validation 
    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').first()).toBeVisible()
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard')
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test.only('Verify the login functionality with invalid credentials',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin1234')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
})
