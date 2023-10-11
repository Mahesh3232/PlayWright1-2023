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
    await page.locator('#src').fill('Pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    const optionCount = await page.locator('.placeHolderMainText').count()
    console.log(optionCount)
    for(let i = 0 ;i < optionCount;i++){
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if(text === 'Nashik Phata'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    page.waitForTimeout(7000)
    await page.locator('#dest').fill('Mumbai',{delay:3000})
    page.waitForTimeout(7000)
    await page.waitForSelector('.sc-iwsKbI.jTMXri >.sc-gZMcBi.grvhsy > .placeHolderMainText')
    const desoptionCount = await page.locator('.sc-iwsKbI.jTMXri >.sc-gZMcBi.grvhsy > .placeHolderMainText').count()
    console.log(desoptionCount)
    for(let i = 0 ;i < desoptionCount;i++){
        let text = await page.locator('.placeHolderMainText').nth(i).textContent()
        if(text === 'Mumbai International Airport'){
            await page.locator('.placeHolderMainText').nth(i).click()
            break
        }
    }
    // let text = await page.locator('.placeHolderMainText').allTextContents()
    // console.log(text)
     await page.pause()
})
