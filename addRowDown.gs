function addRowDown() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Х-матрица");
  const column = getBaseCell(1).column;
  const row = getBaseCell(1).row;
  
  sheet.insertRowBefore(row + 1);
  
  const sourceRange = sheet.getRange(row + 2, 1, 1, sheet.getMaxColumns());
  const targetRange = sheet.getRange(row + 1, 1, 1, sheet.getMaxColumns());
  
  sourceRange.copyFormatToRange(sheet, 1, sheet.getMaxColumns(), row + 1, row + 1);
  targetRange.setDataValidations(sourceRange.getDataValidations());

  const func = sheet.getRange(row + 2, column).getFormula();

  const regex = /\'Долгосрочные цели\'!\$A\$?(\d+)/;
  
  const newFunc = func.replace(regex, (match, p1) => {
    return `'Долгосрочные цели'!\$A\$${parseInt(p1) + 1}`;
  });
  sheet.getRange(row + 1, column).setFormula(newFunc);
}