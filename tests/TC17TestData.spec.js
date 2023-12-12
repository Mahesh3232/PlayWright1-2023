const { test, expect } = require('@playwright/test');
const data = require('../tests/TestData/ContactUsData.json')
data.forEach(element => {
    test(`Verify contact us functionality with multiple dataset for ${element.fstName}`,async({page})=>{
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('input[placeholder="First Name"]').fill(element.fstName)
        await page.locator('input[placeholder="Last Name"]').fill(element.lstName)
        await page.locator('input[placeholder="Email Address"]').fill(element.email)
        await page.locator('textarea[placeholder="Comments"]').fill(element.msg)
        await page.locator('input[type="submit"]').click()
        await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    })
});





// let info = {
//     fstName: "Mahesh",
//     lstName: "Aher",
//     email: "mahesh@gmail.com",
//     msg: "I am learning Playwright"
// }

// console.log(info.msg)

