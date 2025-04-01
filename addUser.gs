function addUser() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Х-матрица");
  const column = getBaseCell(2).column;
  const row = getBaseCell(1).row
  
  sheet.insertColumnBefore(column + 1);
  
  const sourceRange = sheet.getRange(1, column + 2, sheet.getMaxRows(), 1);
  const targetRange = sheet.getRange(1, column + 1, sheet.getMaxRows(), 1);
  
  sourceRange.copyFormatToRange(sheet, column + 1, column + 1, 1, sheet.getMaxRows());
  targetRange.setDataValidations(sourceRange.getDataValidations());

  const func = sheet.getRange(row, column + 2).getFormula();

  const regex = /\'Сотрудники\'!\$A\$?(\d+)/;
  
  const newFunc = func.replace(regex, (match, p1) => {
    return `'Сотрудники'!\$A\$${parseInt(p1) + 1}`;
  });
  sheet.getRange(row, column + 1).setFormula(newFunc);
}