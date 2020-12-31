// #!/bin/javascript

// copy doc from Google Drive

// run this script at script.google.com

// declare variables 
var copies = // Example: 15
var fileId = // the Google Drive ID is the URL of the Google Doc after the "d/" and before "/edit"

// define function to copy the document
function copyDocs() {
    for(i=0; i<copies; i++) {
    // get the file wtih Google Drive ID
    var drive=DriveApp.getFileById('fileId')
    // make copy
    drive.makeCopy();
    }
}
