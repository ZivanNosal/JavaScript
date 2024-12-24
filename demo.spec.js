const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("Demo Suite", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("demo", async function () {
    await driver.get("https://proxy-portal-test.web.app/");
    await driver.manage().window().setRect({ width: 1000, height: 1000 });
  });
});
