const { test, expect } = require('@playwright/test')
// 1st way by .framelocator
test('Handling Iframe Using Playwright',async({page})=>{
    await page.goto('https://letcode.in/frame')
    //await page.locator('input[placeholder="Enter name"]').fill('Mahesh')
    const UserNameField = await page.frameLocator('#firstFr').locator('input[placeholder="Enter name"]')
    await UserNameField.fill('Mahesh')
    await expect(UserNameField).toBeVisible()
    await page.waitForTimeout(3000)
})

//2nd way by .frame by name attribute

test('2nd Way handling Iframe',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame = await page.frame('firstFr')
    await frame.locator('input[placeholder="Enter name"]').fill('Minskole')
    await expect(frame.locator('input[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(2000)
})

//2nd way by .frame by URl 

test.only('2nd by URL Way handling Iframe',async({page})=>{
    await page.goto('https://letcode.in/frame')
    const frame = await page.frame({url:"https://letcode.in/frameUI"})
    await frame.locator('input[placeholder="Enter name"]').fill('Minskole')
    await expect(frame.locator('input[placeholder="Enter name"]')).toBeVisible()
    await page.waitForTimeout(2000)
})