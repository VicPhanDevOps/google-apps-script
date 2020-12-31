// #!/bin/javascript

// send email in Google Apps Script

// run this script at script.google.com

//declare variables 
var recipient = // Example: '1234@gmail.com'
var subject = // Example: 'Hello, World!'
var body = // Example: 'Hello, World!'

// email from Gmail
function emailThis() {
    // define recipient, subject and body
    var mail = GmailApp.sendEmail(recipient, subject, body);
};
