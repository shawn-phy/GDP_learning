/** @OnlyCurrentDoc */
function sendmap() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var address = sheet.getRange('A1').getValue();
  var map = Maps.newStaticMap().addMarker(address);
  GmailApp.sendEmail('testmailused@gmail.com', 'Map', 'See below.', {attachments:[map]});
}


