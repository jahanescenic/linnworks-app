import { browser, by, element } from 'protractor';
var EC = browser.ExpectedConditions;
var HomePageAssertion = element(by.xpath('//div[@class="container - fluid"]/div[@class="row"]//ul[@class="nav navbar - nav"]/li[1]'));

export class AppPage {
  
  navigateTo() {
    return browser.get('/');
  }

  getMainHeading() {
    browser.wait(EC.visibilityOf(element(by.xpath('//div[@class="container - fluid"]'))));
    //console.log(HomePageAssertion.getText());
  }
}
