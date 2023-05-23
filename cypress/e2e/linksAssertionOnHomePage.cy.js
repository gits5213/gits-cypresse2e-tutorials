import homePageLocator from '../e2e/PageObject/homePage';


describe('Links assertion on the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('validate, link contains AB Testing', () => {
    //A/B Testing
    cy.get(homePageLocator.getABTesting).contains('A/B Testing');
    cy.get(homePageLocator.getABTesting).should('have.attr', 'href', '/abtest');
  });
  it('validate, link contains Add/Remove Elements', () => {
    //Add/Remove Elements
    cy.get(homePageLocator.getAddRemoveElement).contains('Add/Remove Elements');
    cy.get(homePageLocator.getAddRemoveElement).should('have.attr', 'href', '/add_remove_elements/');
  });
  it('validate, link contains Basic Auth (user and pass: admin)', () => {
    // Basic Auth (user and pass: admin)
    cy.get(homePageLocator.getBasicAuth).contains('Basic Auth');
    cy.get(homePageLocator.getBasicAuth).should('have.attr', 'href', '/basic_auth');
  });
  it('validate, link contains Broken Images', () => {
    //Broken Images
    cy.get(homePageLocator.getBrokenImage).contains('Broken Images');
    cy.get(homePageLocator.getBrokenImage).should('have.attr', 'href', '/broken_images');
  });
  it('validate, link contains Challenging DOM', () => {
    //Challenging DOM
    cy.get(homePageLocator.getChallenginDom).contains('Challenging DOM');
    cy.get(homePageLocator.getChallenginDom).should('have.attr', 'href', '/challenging_dom');
  });
  it('validate, link contains Checkboxes', () => {
    //Checkboxes
    cy.get(homePageLocator.getCheckbox).contains('Checkboxes');
    cy.get(homePageLocator.getCheckbox).should('have.attr', 'href', '/checkboxes');
  });
  it('validate, link contains Context Menu', () => {
    //Context Menu
    cy.get(homePageLocator.getContextMenu).contains('Context Menu');
    cy.get(homePageLocator.getContextMenu).should('have.attr', 'href', '/context_menu');
  });
  it('validate, link contains Digest Authentication (user and pass: admin)', () => {
    //Digest Authentication (user and pass: admin)
    cy.get(homePageLocator.getDigestAuth).contains('Digest Authentication');
    cy.get(homePageLocator.getDigestAuth).should('have.attr', 'href', '/digest_auth');
  });
  it('validate, link contains Disappearing Elements', () => {
    //Disappearing Elements
    cy.get(homePageLocator.getDisappearingEEelements).contains('Disappearing Elements');
    cy.get(homePageLocator.getDisappearingEEelements).should('have.attr', 'href', '/disappearing_elements');
  });
  it('validate, link contains Drag and Drop', () => {
    //Drag and Drop
    cy.get(homePageLocator.getDragAndDrop).contains('Drag and Drop');
    cy.get(homePageLocator.getDragAndDrop).should('have.attr', 'href', '/drag_and_drop');
  });
  it('validate, link contains Dropdown', () => {
    //Dropdown
    cy.get(homePageLocator.getDropdown).contains('Dropdown');
    cy.get(homePageLocator.getDropdown).should('have.attr', 'href', '/dropdown');
  });
  it('validate, link contains Dynamic Content', () => {
    //Dynamic Content
    cy.get(homePageLocator.getDynamicContent).contains('Dynamic Content');
    cy.get(homePageLocator.getDynamicContent).should('have.attr', 'href', '/dynamic_content');
  });
  it('validate, link contains Dynamic Controls', () => {
    //Dynamic Controls
    cy.get(homePageLocator.getDynamicControls).contains('Dynamic Controls');
    cy.get(homePageLocator.getDynamicControls).should('have.attr', 'href', '/dynamic_controls');
  });
  it('validate, link contains Dynamic Loading', () => {
    //Dynamic Loading
    cy.get(homePageLocator.getDynamicLoading).contains('Dynamic Loading');
    cy.get(homePageLocator.getDynamicLoading).should('have.attr', 'href', '/dynamic_loading');

  });
  it('validate, link contains Entry Ad', () => {
    //Entry Ad
    cy.get(homePageLocator.getEntryAd).contains('Entry Ad');
    cy.get(homePageLocator.getEntryAd).should('have.attr', 'href', '/entry_ad');
  });
  it('validate, link contains Exit Intent', () => {
    //Exit Intent
    cy.get(homePageLocator.getExitIntent).contains('Exit Intent');
    cy.get(homePageLocator.getExitIntent).should('have.attr', 'href', '/exit_intent');
  });
  it('validate, link contains File Download', () => {
    //File Download
    cy.get(homePageLocator.getFileDownload).contains('File Download');
    cy.get(homePageLocator.getFileDownload).should('have.attr', 'href', '/download');
  });
  it('validate, link contains File Upload', () => {
    //File Upload
    cy.get(homePageLocator.getFileUpload).contains('File Upload');
    cy.get(homePageLocator.getFileUpload).should('have.attr', 'href', '/upload');
  });
  it('validate, link contains Floating Menu', () => {
    //Floating Menu
    cy.get(homePageLocator.getFloatingMenu).contains('Floating Menu');
    cy.get(homePageLocator.getFloatingMenu).should('have.attr', 'href', '/floating_menu');
  });
  it('validate, link contains Forgot Password', () => {
   //Forgot Password
    cy.get(homePageLocator.getForgotPassword).contains('Forgot Password');
    cy.get(homePageLocator.getForgotPassword).should('have.attr', 'href', '/forgot_password');
  });
  it('validate, link contains Form Authentication', () => {
     //Form Authentication
    cy.get(homePageLocator.getFormAuth).contains('Form Authentication');
    cy.get(homePageLocator.getFormAuth).should('have.attr', 'href', '/login');
  });
  it('validate, link contains Frames', () => {
   //Frames
    cy.get(homePageLocator.getFrames).contains('Frames');
    cy.get(homePageLocator.getFrames).should('have.attr', 'href', '/frames');
  });
  it('validate, link contains Geolocation', () => {
    //Geolocation
    cy.get(homePageLocator.getGeolocation).contains('Geolocation');
    cy.get(homePageLocator.getGeolocation).should('have.attr', 'href', '/geolocation');
  });
  it('validate, link contains Horizontal Slider', () => {
     //Horizontal Slider
    cy.get(homePageLocator.getHorizontalSlider).contains('Horizontal Slider');
    cy.get(homePageLocator.getHorizontalSlider).should('have.attr', 'href', '/horizontal_slider');
  });
  it('validate, link contains Hovers', () => {
   //Hovers
    cy.get(homePageLocator.getHovers).contains('Hovers');
    cy.get(homePageLocator.getHovers).should('have.attr', 'href', '/hovers');
  });
  it('validate, link contains Infinite Scroll', () => {
    //Infinite Scroll
    cy.get(homePageLocator.getInfiniteScroll).contains('Infinite Scroll');
    cy.get(homePageLocator.getInfiniteScroll).should('have.attr', 'href', '/infinite_scroll');
  });
  it('validate, link contains Inputs', () => {
    //Inputs
    cy.get(homePageLocator.getInputs).contains('Inputs');
    cy.get(homePageLocator.getInputs).should('have.attr', 'href', '/inputs');
  });
  it('validate, link contains JQuery UI Menus', () => {
    //JQuery UI Menus
    cy.get(homePageLocator.getJQueryUIMenus).contains('JQuery UI Menus');
    cy.get(homePageLocator.getJQueryUIMenus).should('have.attr', 'href', '/jqueryui/menu');
  });
  it('validate, link contains JavaScript Alerts', () => {
    //JavaScript Alerts
    cy.get(homePageLocator.getJavaScriptAlerts).contains('JavaScript Alerts');
    cy.get(homePageLocator.getJavaScriptAlerts).should('have.attr', 'href', '/javascript_alerts');
  });
  it('validate, link contains JavaScript onload event error', () => {
    //JavaScript onload event error
    cy.get(homePageLocator.getJavaScriptOnloadEventError).contains('JavaScript onload event error');
    cy.get(homePageLocator.getJavaScriptOnloadEventError).should('have.attr', 'href', '/javascript_error');
  });
  it('validate, link contains Key Presses', () => {
    //Key Presses
    cy.get(homePageLocator.getKeeyPresses).contains('Key Presses');
    cy.get(homePageLocator.getKeeyPresses).should('have.attr', 'href', '/key_presses');
  });
  it('validate, link contains Large & Deep DOM', () => {
     //Large & Deep DOM
    cy.get(homePageLocator.getLergeAndDeepDom).contains('Large & Deep DOM');
    cy.get(homePageLocator.getLergeAndDeepDom).should('have.attr', 'href', '/large');
  });
  it('validate, link containsMultiple Windows', () => {
   //Multiple Windows
    cy.get(homePageLocator.getmultipleWindow).contains('Multiple Windows');
    cy.get(homePageLocator.getmultipleWindow).should('have.attr', 'href', '/windows');
  });
  it(`validate, link contains Nested Frames`, () => {
    //Nested Frames
    cy.get(homePageLocator.getNestedFrames).contains('Nested Frames');
    cy.get(homePageLocator.getNestedFrames).should('have.attr', 'href', '/nested_frames');
  });
  it('validate, link contains Notification Messages', () => {
    //Notification Messages
    cy.get(homePageLocator.getNotificationMessages).contains('Notification Messages');
    cy.get(homePageLocator.getNotificationMessages).should('have.attr', 'href', '/notification_message');
  });
  it('validate, link contains Redirect Link', () => {
    //Redirect Link
    cy.get(homePageLocator.getRedirectLink).contains('Redirect Link');
    cy.get(homePageLocator.getRedirectLink).should('have.attr', 'href', '/redirector');
  });
  it('validate, link contains Secure File Download', () => {
    //Secure File Download
    cy.get(homePageLocator.getSecureFileDownload).contains('Secure File Download');
    cy.get(homePageLocator.getSecureFileDownload).should('have.attr', 'href', '/download_secure');
  });
  it('validate, link contains Shadow DOM', () => {
    //Shadow DOM
    cy.get(homePageLocator.getShadowDom).contains('Shadow DOM');
    cy.get(homePageLocator.getShadowDom).should('have.attr', 'href', '/shadowdom');
  });
  it('validate, link contains Shifting Content', () => {
    //Shifting Content
    cy.get(homePageLocator.getShiftingContent).contains('Shifting Content');
    cy.get(homePageLocator.getShiftingContent).should('have.attr', 'href', '/shifting_content');
  });
  it('validate, link contains Slow Resources', () => {
    //Slow Resources
    cy.get(homePageLocator.getSlowResources).contains('Slow Resources');
    cy.get(homePageLocator.getSlowResources).should('have.attr', 'href', '/slow');
  });
  it('validate, link contains Sortable Data Tables', () => {
    //Sortable Data Tables
    cy.get(homePageLocator.getSortableDataTables).contains('Sortable Data Tables');
    cy.get(homePageLocator.getSortableDataTables).should('have.attr', 'href', '/tables');
  });
  it('validate, link contains Status Codes', () => {
    //Status Codes
    cy.get(homePageLocator.getStatusCodes).contains('Status Codes');
    cy.get(homePageLocator.getStatusCodes).should('have.attr', 'href', '/status_codes');
  });
  it('validate, link contains Typos', () => {
    //Typos
    cy.get(homePageLocator.getTypos).contains('Typos');
    cy.get(homePageLocator.getTypos).should('have.attr', 'href', '/typos');
  });
  it('validate, link contains WYSIWYG Editor', () => {
    //WYSIWYG Editor
    cy.get(homePageLocator.getWysiwygEditor).contains('WYSIWYG Editor');
    cy.get(homePageLocator.getWysiwygEditor).should('have.attr', 'href', '/tinymce');
  })
})
