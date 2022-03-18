import Puppeteer from 'puppeteer';

jest.setTimeout(1000 * 60);
let browser;
let page;
const LOCAL_URL = 'http://localhost:3000/';
beforeAll(async () => {
  browser = await Puppeteer.launch({
    defaultViewport: null,
    headless: !process.env.HEADED,
    args: ['--no-sandbox', '--disable-gpu', '--window-size=1920,1080'],
  });
  page = await browser.newPage();
});
test('place holder', async () => {
  await page.goto(LOCAL_URL);
});
afterAll(async () => {
  await browser.close();
});
