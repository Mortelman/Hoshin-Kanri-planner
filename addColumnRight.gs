function addColumnRight() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Х-матрица");
  const column = getBaseCell(1).column + 1;
  const row = getBaseCell(1).row
  
  sheet.insertColumnBefore(column + 1);
  
  const sourceRange = sheet.getRange(1, column + 2, sheet.getMaxRows(), 1);
  const targetRange = sheet.getRange(1, column + 1, sheet.getMaxRows(), 1);
  
  sourceRange.copyFormatToRange(sheet, column + 1, column + 1, 1, sheet.getMaxRows());
  targetRange.setDataValidations(sourceRange.getDataValidations());
  setBaseCell(2, getBaseCell(2).row, getBaseCell(2).column + 1);

  const func = sheet.getRange(row, column + 2).getFormula();

  const regex = /\'Долгосрочные цели\'!\$B\$?(\d+)/;
  
  const newFunc = func.replace(regex, (match, p1) => {
    return `'Долгосрочные цели'!\$B\$${parseInt(p1) + 1}`;
  });
  sheet.getRange(row, column + 1).setFormula(newFunc);
}