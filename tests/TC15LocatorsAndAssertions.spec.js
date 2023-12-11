const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');

    // find single element 
    let singalEle = await page.locator('[name="contactme"]')
    await expect(singalEle).toBeVisible()
    await expect(singalEle).toHaveText('CONTACT US')
    await expect(singalEle).not.toBeNull()
    await expect(singalEle).toHaveCount(1)
    await expect(singalEle).toHaveClass('section_header')

    // find multiple element
  
    let multliEle = await page.$$('[type="text"]')
    await expect(multliEle.length).toBe(3)

   let multliEle1 = await page.locator('[type="text"]').count()
    await expect(multliEle1).toBe(3)
    await expect(multliEle1).toEqual(3)

    let multliEle2 = await page.locator('[type="text"]')
    await expect(multliEle2).toHaveCount(3)
    // find element by class name
    // find element by id 
    //#contact_form
 
    // find element by Css selector 
    // tagName[attribute = "value"]
   
   
});
