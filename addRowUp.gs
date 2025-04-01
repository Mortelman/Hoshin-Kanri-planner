function addRowUp() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Х-матрица");
  const column = getBaseCell(1).column;
  const row = getBaseCell(1).row;
  
  sheet.insertRowAfter(row - 1);
  
  const sourceRange = sheet.getRange(row - 1, 1, 1, sheet.getMaxColumns());
  const targetRange = sheet.getRange(row, 1, 1, sheet.getMaxColumns());
  
  sourceRange.copyFormatToRange(sheet, 1, sheet.getMaxColumns(), row, row);
  targetRange.setDataValidations(sourceRange.getDataValidations());
  setBaseCell(1, getBaseCell(1).row + 1, getBaseCell(1).column);
  setBaseCell(2, getBaseCell(2).row + 1, getBaseCell(2).column);

  const func = sheet.getRange(row - 1, column).getFormula();

  const regex = /\'Задачи\'!\$A\$?(\d+)/;
  
  const newFunc = func.replace(regex, (match, p1) => {
    return `'Задачи'!\$A\$${parseInt(p1) + 1}`;
  });
  sheet.getRange(row, column).setFormula(newFunc);
}