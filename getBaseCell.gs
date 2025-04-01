function getBaseCell(n) {
  const ss = SpreadsheetApp.getActive();
  const dbSheet = ss.getSheetByName('db');
  var row = 0;
  var column = 0;
  if (n == 1) {
    row = dbSheet.getRange('A1').getValue();
    column = dbSheet.getRange('B1').getValue();
  }
  if (n == 2) {
    row = dbSheet.getRange('A2').getValue();
    column = dbSheet.getRange('B2').getValue();
  }
  
  return { row: row || 0, column: column || 0 };
}