
var faker = require('faker');
var randomName = faker.name.findName(); 
var randomEmail = faker.internet.exampleEmail();
var randomLogin = faker.random.word(); 
var randomSite = faker.internet.url();
console.log('Name:'+ randomName+'   '+'Email:'+randomEmail);
console.log('Login:'+ randomLogin+'   '+'Site:'+randomSite);

Feature('Pub reg');
// Before((I) => {
//     I.amOnPage('/');
//   });

// const createTodo = function (I, name) {
//     I.fillField({model: 'newTodo'}, name);
//     I.pressKey('Enter');
//   }

Scenario('Publisher reg with paypal @C30', (I) => {

 I.amOnPage('http://beta.publishers.yyakovlev.developzilla.com/signup');
    I.see('Do you want to sell traffic from your Website');
    I.see('Name');
    I.see('Email');
    I.fillField('Name',randomName);
    I.fillField('Email',randomEmail);
  I.see('By clicking CONTINUE you accept Terms & Conditions and Privacy Policy');
  I.saveScreenshot('step1.png');
  I.click('Continue');

  //Step2
  I.waitForText('Please fill in the required fields to create your account.');
  I.see('Login');
  I.see('Password');
  I.fillField('Login',randomLogin);
  I.fillField('Messenger account',randomLogin);
  I.fillField('Password','password');
  I.click(".//div[starts-with(@id, 'undefined-undefined-Preferredpaysystem') ]");
  I.see('PayPal');
  I.click("//*[contains(text(),'PayPal')]")
  I.see('PayPal');  

 
  I.wait
  I.fillField('websites',randomSite);
  I.waitForText('Account e-mail');
  I.see('Account e-mail'); 
  I.clearField('Account e-mail');
  I.fillField('Account e-mail',randomEmail);
  I.clearField('websites');
  I.fillField('websites',randomSite);
  I.saveScreenshot('step2.png');
  I.click('Complete Registration');
I.waitForText("We've just sent a verification link to",10);
 
  I.see(randomEmail);
  I.saveScreenshot('complete.png');
  
});
