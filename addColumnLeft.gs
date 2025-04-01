function addColumnLeft() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Х-матрица");
  const column = getBaseCell(1).column;
  const row = getBaseCell(1).row
  
  sheet.insertColumnAfter(column -  1);
  
  const sourceRange = sheet.getRange(1, column - 1, sheet.getMaxRows(), 1);
  const targetRange = sheet.getRange(1, column, sheet.getMaxRows(), 1);
  
  sourceRange.copyFormatToRange(sheet, column, column, 1, sheet.getMaxRows());
  targetRange.setDataValidations(sourceRange.getDataValidations());
  setBaseCell(1, getBaseCell(1).row, getBaseCell(1).column + 1);
  setBaseCell(2, getBaseCell(2).row, getBaseCell(2).column + 1);

  const func = sheet.getRange(row, column - 1).getFormula();

  const regex = /\'Годовые цели\'!\$A\$?(\d+)/;
  
  const newFunc = func.replace(regex, (match, p1) => {
    return `'Годовые цели'!\$A\$${parseInt(p1) + 1}`;
  });
  sheet.getRange(row, column).setFormula(newFunc);
}