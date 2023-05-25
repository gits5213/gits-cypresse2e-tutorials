import homePageLocator from '../PageObject/homePage';
import homePageData from '../fixtures/userData/homePageData.json';
import utils from '../utilities/utils';
import appData from '../fixtures/applicationData/appData.json';

//DRY AND KISS Priciple
const linksLocators = [];
  const linksLocatorsLength = 45;
  for(let i=1; i<linksLocatorsLength; i++){
    linksLocators.push(
        homePageLocator.getHomePageLinksLocators(i)
    );
  }

describe('Links assertion on the home page', () => {
  beforeEach(() => {
    utils.visit('/')
  })

  linksLocators.forEach((locator, index) => {
    it(`validate, link contains ${homePageData.linksText[index]} Editor`, () => {
        utils.verifyTextContains(locator, homePageData.linksText[index]);
        utils.verifyLinkValues(locator, appData.haveAttr, appData.href, homePageData.linksUrl[index]);
      })
  })
})
