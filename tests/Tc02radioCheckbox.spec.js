const {test,expect} = require('@playwright/test')

test('Handling the radio Buttons',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    //await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
})


test('Handling the Checkbox',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').check()
    await expect(page.locator('#vfb-6-1')).toBeChecked()
})

test('Handling the Checkbox with click method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-1')).not.toBeChecked()
    await page.locator('#vfb-6-1').click()
    await expect(page.locator('#vfb-6-1')).toBeChecked()
})

test.only('Handling the radio Buttons with click method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    //await expect(page.locator('#vfb-7-1')).not.toBeChecked()
    await page.locator('#vfb-7-1').click()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
})