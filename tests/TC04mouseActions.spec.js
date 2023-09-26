const {test,expect} = require('@playwright/test')
//Mouse actions 
//click()
//dblclick()
//hover()
//rightClick()

test('Verify the mouse dblClick actions',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#doubleClickBtn').dblclick()
    await expect(page.locator('#doubleClickMessage')).toBeVisible()
    await page.pause()
})

test('Verify the mouse rightclick action',async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    await page.locator('#rightClickBtn').click({button:'right'})
    await expect(page.locator('#rightClickMessage')).toBeVisible()
    // await page.pause()
})

test.only('Varify mouse hover action',async({page})=>{
    await page.goto('https://demoqa.com/menu')
    await page.getByText('Main Item 2').hover()
    await page.getByText('SUB SUB LIST »').hover()
    await page.getByText('Sub Sub Item 2').click()
    await expect(page).toHaveURL('https://demoqa.com/menu#')
    await page.pause()
})
