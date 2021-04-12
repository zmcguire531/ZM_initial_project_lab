const playwright = require('playwright');

(async () => {

    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    const context = await browser.newContext();

    //page
    const page = await context.newPage();

    //navigate to the page
    await page.goto("https://duckduckgo.com")

    await page.screenshot({path: `ea-${Date.now}.png`})
    
    await browser.close();

})();