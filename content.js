const puppeteer = require(['puppeteer'])

async function scrape(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="randomtext_box"]/text()[1]');
    const text = await el.getProperty('text');
    const srcTxt = await src.jsonValue();
    browser.close()
    const newChild = document.createElement("p");
    newChild.appendChild(srcTxt);
    newChild.classList.add('random-text');
    const parent = document.querySelectorAll('[role="feed"]')[0];
    parent.insertBefore(newChild, parent.children[0]);

}

scrape("https://randomtextgenerator.com/")





