function onEdit(e) {
  var range = e.range;
  var sheet = range.getSheet();
  var data = sheet.getDataRange().getValues();
  var kanri = SpreadsheetApp.getActive().getSheetByName("Х-матрица");
  const row = range.getRow();
  const base_cell = getBaseCell(1);

  if (sheet.getName() === "Годовые цели" && (range.getColumn() === 2 || range.getColumn() === 3)) {
    var goal = data[row - 1][0];
    var weak = arrayToDict(smartSplit(data[row - 1][1]));
    var strong = arrayToDict(smartSplit(data[row - 1][2]));
    var kanri_column = -1;
    for (var i = base_cell.column - 1; i >= 1; --i) {
      if (kanri.getRange(base_cell.row, i).getValue() === goal) {
        kanri_column = i;
        break;
      }
    }
    Logger.log(strong);
    Logger.log(weak);

    if (kanri_column === -1) {
      return;
    }

    for (var i = base_cell.row + 1; i <= kanri.getMaxRows(); ++i) {
      var tmp = kanri.getRange(i, base_cell.column).getValue();
      Logger.log(tmp);
      if (strong[tmp]) {
        kanri.getRange(i, kanri_column).setValue("⚫");
      } else if (weak[tmp]) {
        kanri.getRange(i, kanri_column).setValue("⚪");
      } else {
        kanri.getRange(i, kanri_column).setValue("");
      }
    }
  }

  if (sheet.getName() === "Задачи" && (range.getColumn() === 2 || range.getColumn() === 3)) {
    var goal = data[row - 1][0];
    var weak = arrayToDict(smartSplit(data[row - 1][1]));
    var strong = arrayToDict(smartSplit(data[row - 1][2]));
    var kanri_row = -1;
    for (var i = base_cell.row - 1; i >= 1; --i) {
      if (kanri.getRange(i, base_cell.column).getValue() === goal) {
        kanri_row = i;
        break;
      }
    }
    Logger.log(strong);
    Logger.log(weak);

    if (kanri_row === -1) {
      return;
    }

    for (var i = base_cell.column - 1; i >= 1; --i) {
      var tmp = kanri.getRange(base_cell.row, i).getValue();
      Logger.log(tmp);
      if (strong[tmp]) {
        kanri.getRange(kanri_row, i).setValue("⚫");
      } else if (weak[tmp]) {
        kanri.getRange(kanri_row, i).setValue("⚪");
      } else {
        kanri.getRange(kanri_row, i).setValue("");
      }
    }
  }

  if (sheet.getName() === "Задачи" && (range.getColumn() === 7 || range.getColumn() === 8)) {
    var goal = data[row - 1][0];
    var weak = arrayToDict(smartSplit(data[row - 1][6]));
    var strong = arrayToDict(smartSplit(data[row - 1][7]));
    var kanri_row = -1;
    for (var i = base_cell.row - 1; i >= 1; --i) {
      if (kanri.getRange(i, base_cell.column).getValue() === goal) {
        kanri_row = i;
        break;
      }
    }
    Logger.log(strong);
    Logger.log(weak);

    if (kanri_row === -1) {
      return;
    }

    const border = getBaseCell(2).column;

    for (var i = base_cell.column + 2; i < border ; ++i) {
      var tmp = kanri.getRange(base_cell.row, i).getValue();
      Logger.log(tmp);
      if (strong[tmp]) {
        kanri.getRange(kanri_row, i).setValue("⚫");
      } else if (weak[tmp]) {
        kanri.getRange(kanri_row, i).setValue("⚪");
      } else {
        kanri.getRange(kanri_row, i).setValue("");
      }
    }
  }

  if (sheet.getName() === "Гант" && range.getColumn() === 2) {
    var goal = data[row - 1][0];
    var strong = arrayToDict(smartSplit(data[row - 1][1]));
    var kanri_row = -1;
    for (var i = base_cell.row - 1; i >= 1; --i) {
      if (kanri.getRange(i, base_cell.column).getValue() === goal) {
        kanri_row = i;
        break;
      }
    }
    Logger.log(strong);

    if (kanri_row === -1) {
      return;
    }

    const border = getBaseCell(2).column;

    for (var i = border + 1; i <= kanri.getMaxColumns(); ++i) {
      var tmp = kanri.getRange(base_cell.row, i).getValue();
      Logger.log(tmp);
      if (strong[tmp]) {
        kanri.getRange(kanri_row, i).setValue("⚫");
      } else {
        kanri.getRange(kanri_row, i).setValue("");
      }
    }
  }
}