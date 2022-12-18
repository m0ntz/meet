import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  //Scenario 1:
  test("An event element is collapsed by default", async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });

  //Scenario 2
  test("User can expand an event to see its details", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event");
    await page.click(".event .details-btn");

    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeDefined();
    browser.close();
  });

  //Scenario 3
  test("User can collapse an event to hide its details", async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");

    await page.waitForSelector(".event");
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event .event__Details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
