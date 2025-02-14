//Skeleton generated by Selenium IDE

const { Builder, By, Key, until } = require('selenium-webdriver')
//const assert = require('assert')

describe('TC5 forgotten password - unregistered email', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TC5 forgotten password - unregistered email', async function() {
    await driver.get("https://proxy-portal-test.web.app/")
    await driver.manage().window().setRect({ width: 1050, height: 847 })
    await driver.wait(until.elementLocated(By.xpath("//button[contains(.,\'Forgot\')]")), 30000).click()
    await driver.findElement(By.css("#email")).sendKeys("admin@test.com")
    //or: await driver.findElement(By.id("email")).sendKeys
    await driver.findElement(By.xpath("//button[contains(.,\'Reset\')]")).click()
    await driver.wait(until.elementLocated(By.xpath("//form[contains(.,\'email was not found\')]")), 30000)
  })
})
