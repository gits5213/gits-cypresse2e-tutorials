import homePageLocator from '../PageObject/homePage';
import homePageData from '../fixtures/userData/homePageData.json';
import utils from '../utilities/utils';


describe('Links assertion on the home page', () => {
  beforeEach(() => {
    utils.visit('/')
  })


  it('validate, link contains AB Testing', () => {
    //A/B Testing
    utils.verifyTextContains(homePageLocator.getABTesting, homePageData.abTesting);
    utils.verifyLinkValues(homePageLocator.getABTesting, 'have.attr', 'href', homePageData.abtestUrl);
  });

  it('validate, link contains Add/Remove Elements', () => {
    //Add/Remove Elements
    utils.verifyTextContains(homePageLocator.getAddRemoveElement, homePageData.addRemoveElements);
    utils.verifyLinkValues(homePageLocator.getAddRemoveElement, 'have.attr', 'href', homePageData.addRemoveElementsUrl);
  });
  it('validate, link contains Basic Auth (user and pass: admin)', () => {
    // Basic Auth (user and pass: admin)
    utils.verifyTextContains(homePageLocator.getBasicAuth, homePageData.basicAuth);
    utils.verifyLinkValues(homePageLocator.getBasicAuth, 'have.attr', 'href', homePageData.basicAuthUrl);
  });
  it('validate, link contains Broken Images', () => {
    //Broken Images
    utils.verifyTextContains(homePageLocator.getBrokenImage, homePageData.brokenImages);
    utils.verifyLinkValues(homePageLocator.getBrokenImage, 'have.attr', 'href', homePageData.brokenImagesUrl);
  });
  it('validate, link contains Challenging DOM', () => {
    //Challenging DOM
    utils.verifyTextContains(homePageLocator.getChallenginDom, homePageData.challengingDOM);
    utils.verifyLinkValues(homePageLocator.getChallenginDom, 'have.attr', 'href', homePageData.challengingDomUrl);
  });
  it('validate, link contains Checkboxes', () => {
    //Checkboxes
    utils.verifyTextContains(homePageLocator.getCheckbox, homePageData.checkboxes);
    utils.verifyLinkValues(homePageLocator.getCheckbox, 'have.attr', 'href', homePageData.checkboxesUrl);
  });
  it('validate, link contains Context Menu', () => {
    //Context Menu
    utils.verifyTextContains(homePageLocator.getContextMenu, homePageData.contextMenu);
    utils.verifyLinkValues(homePageLocator.getContextMenu, 'have.attr', 'href', homePageData.contextMenuUrl);
  });
  it('validate, link contains Digest Authentication (user and pass: admin)', () => {
    //Digest Authentication (user and pass: admin)
    utils.verifyTextContains(homePageLocator.getDigestAuth, homePageData.digestAuthentication);
    utils.verifyLinkValues(homePageLocator.getDigestAuth, 'have.attr', 'href', homePageData.digestAuthUrl);
  });
  it('validate, link contains Disappearing Elements', () => {
    //Disappearing Elements
    utils.verifyTextContains(homePageLocator.getDisappearingEEelements, homePageData.disappearingElements);
    utils.verifyLinkValues(homePageLocator.getDisappearingEEelements, 'have.attr', 'href', homePageData.disappearingElementsUrl);
  });
  it('validate, link contains Drag and Drop', () => {
    //Drag and Drop
    utils.verifyTextContains(homePageLocator.getDragAndDrop, homePageData.dragAndDrop);
    utils.verifyLinkValues(homePageLocator.getDragAndDrop, 'have.attr', 'href', homePageData.dragAndDropUrl);
  });
  it('validate, link contains Dropdown', () => {
    //Dropdown
    utils.verifyTextContains(homePageLocator.getDropdown, homePageData.dropdown);
    utils.verifyLinkValues(homePageLocator.getDropdown, 'have.attr', 'href', homePageData.dropdownUrl);
  });
  it('validate, link contains Dynamic Content', () => {
    //Dynamic Content
    utils.verifyTextContains(homePageLocator.getDynamicContent, homePageData.dynamicContent);
    utils.verifyLinkValues(homePageLocator.getDynamicContent, 'have.attr', 'href', homePageData.dynamicContentUrl);
  });
  it('validate, link contains Dynamic Controls', () => {
    //Dynamic Controls
    utils.verifyTextContains(homePageLocator.getDynamicControls, homePageData.dynamicControls);
    utils.verifyLinkValues(homePageLocator.getDynamicControls, 'have.attr', 'href', homePageData.dynamicControlUrl);
  });
  it('validate, link contains Dynamic Loading', () => {
    //Dynamic Loading
    utils.verifyTextContains(homePageLocator.getDynamicLoading, homePageData.dynamicLoading);
    utils.verifyLinkValues(homePageLocator.getDynamicLoading, 'have.attr', 'href', homePageData.dynamicLoadingUrl);

  });
  it('validate, link contains Entry Ad', () => {
    //Entry Ad
    utils.verifyTextContains(homePageLocator.getEntryAd, homePageData.entryAd);
    utils.verifyLinkValues(homePageLocator.getEntryAd, 'have.attr', 'href', homePageData.entryAdUrlUrl);
  });
  it('validate, link contains Exit Intent', () => {
    //Exit Intent
    utils.verifyTextContains(homePageLocator.getExitIntent, homePageData.exitIntent);
    utils.verifyLinkValues(homePageLocator.getExitIntent, 'have.attr', 'href', homePageData.exitIntentUrl);
  });
  it('validate, link contains File Download', () => {
    //File Download
    utils.verifyTextContains(homePageLocator.getFileDownload, homePageData.fileDownload);
    utils.verifyLinkValues(homePageLocator.getFileDownload, 'have.attr', 'href', homePageData.downloadUrl);
  });
  it('validate, link contains File Upload', () => {
    //File Upload
    utils.verifyTextContains(homePageLocator.getFileUpload, homePageData.fileUpload);
    utils.verifyLinkValues(homePageLocator.getFileUpload, 'have.attr', 'href', homePageData.uploadUrl);
  });
  it('validate, link contains Floating Menu', () => {
    //Floating Menu
    utils.verifyTextContains(homePageLocator.getFloatingMenu, homePageData.floatingMenu);
    utils.verifyLinkValues(homePageLocator.getFloatingMenu, 'have.attr', 'href', homePageData.floatingMenuUrl);
  });
  it('validate, link contains Forgot Password', () => {
   //Forgot Password
   utils.verifyTextContains(homePageLocator.getForgotPassword, homePageData.forgotPassword);
    utils.verifyLinkValues(homePageLocator.getForgotPassword, 'have.attr', 'href', homePageData.forgotPasswordUrl);
  });
  it('validate, link contains Form Authentication', () => {
     //Form Authentication
     utils.verifyTextContains(homePageLocator.getFormAuth, homePageData.formAuthentication);
    utils.verifyLinkValues(homePageLocator.getFormAuth, 'have.attr', 'href', homePageData.loginUrl);
  });
  it('validate, link contains Frames', () => {
   //Frames
   utils.verifyTextContains(homePageLocator.getFrames, homePageData.frames);
    utils.verifyLinkValues(homePageLocator.getFrames, 'have.attr', 'href', homePageData.framesUrl);
  });
  it('validate, link contains Geolocation', () => {
    //Geolocation
    utils.verifyTextContains(homePageLocator.getGeolocation, homePageData.geolocation);
    utils.verifyLinkValues(homePageLocator.getGeolocation, 'have.attr', 'href', homePageData.geolocationUrl);
  });
  it('validate, link contains Horizontal Slider', () => {
     //Horizontal Slider
     utils.verifyTextContains(homePageLocator.getHorizontalSlider, homePageData.horizontalSlider);
    utils.verifyLinkValues(homePageLocator.getHorizontalSlider, 'have.attr', 'href', homePageData.horizontalSliderUrl);
  });
  it('validate, link contains Hovers', () => {
   //Hovers
   utils.verifyTextContains(homePageLocator.getHovers, homePageData.hovers);
    utils.verifyLinkValues(homePageLocator.getHovers, 'have.attr', 'href', homePageData.hoversUrl);
  });
  it('validate, link contains Infinite Scroll', () => {
    //Infinite Scroll
    utils.verifyTextContains(homePageLocator.getInfiniteScroll, homePageData.infiniteScroll);
    utils.verifyLinkValues(homePageLocator.getInfiniteScroll, 'have.attr', 'href', homePageData.infiniteScrollUrl);
  });
  it('validate, link contains Inputs', () => {
    //Inputs
    utils.verifyTextContains(homePageLocator.getInputs, homePageData.inputs);
    utils.verifyLinkValues(homePageLocator.getInputs, 'have.attr', 'href', homePageData.inputsUrl);
  });
  it('validate, link contains JQuery UI Menus', () => {
    //JQuery UI Menus
    utils.verifyTextContains(homePageLocator.getJQueryUIMenus, homePageData.jQueryUIMenu);
    utils.verifyLinkValues(homePageLocator.getJQueryUIMenus, 'have.attr', 'href', homePageData.jqueryuiMenuUrl);
  });
  it('validate, link contains JavaScript Alerts', () => {
    //JavaScript Alerts
    utils.verifyTextContains(homePageLocator.getJavaScriptAlerts, homePageData.javaScriptAlerts);
    utils.verifyLinkValues(homePageLocator.getJavaScriptAlerts, 'have.attr', 'href', homePageData.javascriptAlertsUrl);
  });
  it('validate, link contains JavaScript onload event error', () => {
    //JavaScript onload event error
    utils.verifyTextContains(homePageLocator.getJavaScriptOnloadEventError, homePageData.javaScriptOnloadEventError);
    utils.verifyLinkValues(homePageLocator.getJavaScriptOnloadEventError, 'have.attr', 'href', homePageData.javascriptErrorUrl);
  });
  it('validate, link contains Key Presses', () => {
    //Key Presses
    utils.verifyTextContains(homePageLocator.getKeeyPresses, homePageData.keyPresses);
    utils.verifyLinkValues(homePageLocator.getKeeyPresses, 'have.attr', 'href', homePageData.keyPressesUrl);
  });
  it('validate, link contains Large & Deep DOM', () => {
     //Large & Deep DOM
    utils.verifyTextContains(homePageLocator.getLergeAndDeepDom, homePageData.largeAandDeepDOM);
    utils.verifyLinkValues(homePageLocator.getLergeAndDeepDom, 'have.attr', 'href', homePageData.largeUrl);
  });
  it('validate, link containsMultiple Windows', () => {
   //Multiple Windows
    utils.verifyTextContains(homePageLocator.getmultipleWindow, homePageData.multipleWindows);
    utils.verifyLinkValues(homePageLocator.getmultipleWindow, 'have.attr', 'href', homePageData.windowsUrl);
  });
  it(`validate, link contains Nested Frames`, () => {
    //Nested Frames
    utils.verifyTextContains(homePageLocator.getNestedFrames, homePageData.nestedFrames);
    utils.verifyLinkValues(homePageLocator.getNestedFrames, 'have.attr', 'href', homePageData.nestedFramesUrl);
  });
  it('validate, link contains Notification Messages', () => {
    //Notification Messages
    utils.verifyTextContains(homePageLocator.getNotificationMessages, homePageData.notificationMessages);
    utils.verifyLinkValues(homePageLocator.getNotificationMessages, 'have.attr', 'href', homePageData.notificationMessageUrl);
  });
  it('validate, link contains Redirect Link', () => {
    //Redirect Link
    utils.verifyTextContains(homePageLocator.getRedirectLink, homePageData.redirectLink);
    utils.verifyLinkValues(homePageLocator.getRedirectLink, 'have.attr', 'href', homePageData.redirectorUrl);
  });
  it('validate, link contains Secure File Download', () => {
    //Secure File Download
    utils.verifyTextContains(homePageLocator.getSecureFileDownload, homePageData.SecureFileDownload);
    utils.verifyLinkValues(homePageLocator.getSecureFileDownload, 'have.attr', 'href', homePageData.downloadSecureUrl);
  });
  it('validate, link contains Shadow DOM', () => {
    //Shadow DOM
    utils.verifyTextContains(homePageLocator.getShadowDom, homePageData.shadowDOM);
    utils.verifyLinkValues(homePageLocator.getShadowDom, 'have.attr', 'href', homePageData.shadowdomUrl);
  });
  it('validate, link contains Shifting Content', () => {
    //Shifting Content
    utils.verifyTextContains(homePageLocator.getShiftingContent, homePageData.shiftingContent);
    utils.verifyLinkValues(homePageLocator.getShiftingContent, 'have.attr', 'href', homePageData.shiftingContentUrl);
  });
  it('validate, link contains Slow Resources', () => {
    //Slow Resources
    utils.verifyTextContains(homePageLocator.getSlowResources, homePageData.slowResources);
    utils.verifyLinkValues(homePageLocator.getSlowResources, 'have.attr', 'href', homePageData.slowUrl);
  });
  it('validate, link contains Sortable Data Tables', () => {
    //Sortable Data Tables
    utils.verifyTextContains(homePageLocator.getSortableDataTables, homePageData.sortableDataTables);
    utils.verifyLinkValues(homePageLocator.getSortableDataTables, 'have.attr', 'href', homePageData.tablesUrl);
  });
  it('validate, link contains Status Codes', () => {
    //Status Codes
    utils.verifyTextContains(homePageLocator.getStatusCodes, homePageData.statusCodes);
    utils.verifyLinkValues(homePageLocator.getStatusCodes, 'have.attr', 'href', homePageData.statusCodesUrl);
  });
  it('validate, link contains Typos', () => {
    //Typos
    utils.verifyTextContains(homePageLocator.getTypos, homePageData.typos);
    utils.verifyLinkValues(homePageLocator.getTypos, 'have.attr', 'href', homePageData.typosUrl);
  });
  it('validate, link contains WYSIWYG Editor', () => {
    //WYSIWYG Editor
    utils.verifyTextContains(homePageLocator.getWysiwygEditor, homePageData.wysiwygEditor);
    utils.verifyLinkValues(homePageLocator.getWysiwygEditor, 'have.attr', 'href', homePageData.tinymceUrl);
  })
  


})
