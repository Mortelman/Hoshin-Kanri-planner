function setBaseCell(n, row, column) {
  const ss = SpreadsheetApp.getActive();
  let dbSheet = ss.getSheetByName('db');

  if (!dbSheet) {
    dbSheet = ss.insertSheet('db');
    dbSheet.hideSheet();
  }

  if (n == 1) {
    dbSheet.getRange('A1').setValue(row);
    dbSheet.getRange('B1').setValue(column);
  }
  if (n == 2) {
    dbSheet.getRange('A2').setValue(row);
    dbSheet.getRange('B2').setValue(column);
  }
}
