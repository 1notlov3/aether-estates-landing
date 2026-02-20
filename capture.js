const { chromium } = require('playwright');
const path = require('path');
(async()=>{
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage({viewport:{width:1600,height:980}});
  const url = 'file://' + path.resolve('/root/.openclaw/workspace/realty-zen/index.html');
  await page.goto(url, {waitUntil:'networkidle'});
  await page.waitForTimeout(2600);
  await page.screenshot({path:'/root/.openclaw/workspace/realty-zen/screenshot-desktop.png', fullPage:true});
  await page.setViewportSize({width:430,height:932});
  await page.reload({waitUntil:'networkidle'});
  await page.waitForTimeout(2200);
  await page.screenshot({path:'/root/.openclaw/workspace/realty-zen/screenshot-mobile.png', fullPage:true});
  await browser.close();
})();
