function GenerateXTable() {
  const sheet = SpreadsheetApp.getActive().insertSheet("Х-матрица");
  sheet.deleteRows(10, sheet.getMaxRows() - 9);
  sheet.deleteColumns(7, sheet.getMaxColumns() - 6);

  let dbSheet = SpreadsheetApp.getActive().getSheetByName('db');
  
  if (!dbSheet) {
    dbSheet = SpreadsheetApp.getActive().insertSheet('db');
    dbSheet.hideSheet();
  }
  setBaseCell(1, 8, 2);
  setBaseCell(2, 8, 5);

  sheet.getRange("B1")
    .setValues([["Матрица планирования Хосин-Канри"]])
    .setFontWeight("bold")
    .setFontSize(20);

  sheet.getRange("A2:F9")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  sheet.getRange("B3:B5")
    .setValues([["Легенда"], ["⚫"], ["⚪"]])
    .setFontWeight("bold");

  sheet.getRange("C4:C5")
    .setValues([[" - прямое влиение"], [" - косвенное влияние"]])
    .setHorizontalAlignment("left");

  sheet.getRange("B8")
    .setValue([["Задачи\n\n\n\n\n\n\nГодовые цели                           Повышаемые\n                                                  метрики\n\n\n\n\n\n\nДолгосрочные цели"]])
    .setFontColor("#2a4e81")
    .setFontSize(16);

  sheet.getRange("E8")
    .setValue([["Ответственные лица"]])
    .setFontSize(12)
    .setBackground("#d4e0f1")
    .setTextRotation(90);

  sheet.getRange("F8")
    .setBackground("#d4e0f1")
    .setTextRotation(90)
    .setFormula("='Сотрудники'!$A2")
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

  sheet.getRange("A8")
    .setTextRotation(90)
    .setFormula("='Годовые цели'!$A2")
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

  sheet.getRange("D8")
    .setTextRotation(90)
    .setFormula("='Долгосрочные цели'!$B8")
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

  const corellation_rule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(sheet.getRange("$B$4:$B$5"), true)
    .build();

  sheet.setColumnWidth(1, 52);
  sheet.setColumnWidth(2, 61);
  sheet.setColumnWidth(3, 431);
  sheet.setColumnWidth(4, 52);
  sheet.setColumnWidth(5, 52);
  sheet.setColumnWidth(6, 52);

  sheet.setRowHeight(7, 52);
  sheet.setRowHeight(8, 492);
  sheet.setRowHeight(9, 52);

  sheet.getRange("A7").setDataValidation(corellation_rule);
  sheet.getRange("D7").setDataValidation(corellation_rule);
  sheet.getRange("F7").setDataValidation(corellation_rule);
  sheet.getRange("A9").setDataValidation(corellation_rule);

  sheet.getRange("A8").setBorder(
    true,  // Верхняя граница
    false,  // Левая граница
    true,  // Нижняя граница
    false,  // Правая граница
    false,  // Вертикальные внутренние границы
    false,  // Горизонтальные внутренние границы
    "#ff0000", // Цвет (HEX или название)
    SpreadsheetApp.BorderStyle.SOLID_THICK // Стиль линии
  );

  sheet.getRange("B7")
    .setBorder(
      false,  // Верхняя граница
      true,  // Левая граница
      false,  // Нижняя граница
      true,  // Правая граница
      false,  // Вертикальные внутренние границы
      false,  // Горизонтальные внутренние границы
      "#ff0000", // Цвет (HEX или название)
      SpreadsheetApp.BorderStyle.SOLID_THICK // Стиль линии
    )
    .setFormula("='Задачи'!$A2")
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

  sheet.getRange("D8:F8").setBorder(
    true,  // Верхняя граница
    false,  // Левая граница
    true,  // Нижняя граница
    false,  // Правая граница
    false,  // Вертикальные внутренние границы
    false,  // Горизонтальные внутренние границы
    "#ff0000", // Цвет (HEX или название)
    SpreadsheetApp.BorderStyle.SOLID_THICK // Стиль линии
  );

  sheet.getRange("E8").setBorder(
    true,  // Верхняя граница
    true,  // Левая граница
    true,  // Нижняя граница
    true,  // Правая граница
    false,  // Вертикальные внутренние границы
    false,  // Горизонтальные внутренние границы
    "#ff0000", // Цвет (HEX или название)
    SpreadsheetApp.BorderStyle.SOLID_THICK // Стиль линии
  );

  sheet.getRange("B9")
    .setBorder(
      false,  // Верхняя граница
      true,  // Левая граница
      false,  // Нижняя граница
      true,  // Правая граница
      false,  // Вертикальные внутренние границы
      false,  // Горизонтальные внутренние границы
      "#ff0000", // Цвет (HEX или название)
      SpreadsheetApp.BorderStyle.SOLID_THICK // Стиль линии
    )
    .setFormula("='Долгосрочные цели'!$A2")
    .setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP);

  sheet.getRange("B7:C7").merge()

  sheet.getRange("B8:C8").merge()

  sheet.getRange("B9:C9").merge()
}
