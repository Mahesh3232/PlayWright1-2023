//Static dropdown

const {test} = require('@playwright/test')

test('Verify the static dropdown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    await page.locator('#superheros').selectOption('ta')
    await page.locator('#lang').selectOption('swift')
    await page.pause()
})

//dynyamic dropdown/Auto suggetion dropdown
test.only('Verify the Dynyamic Dropdoen',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune')
    await page.pause()
})