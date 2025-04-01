function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Хосин Канри")
    .addItem("Создать Х-матрицу", "GenerateXTable")
    .addItem("Добавить годовую цель", "addColumnLeft")
    .addItem("Добавить метрику", "addColumnRight")
    .addItem("Добавить Задачу", "addRowUp")
    .addItem("Добавить долгосрочную цель", "addRowDown")
    .addItem("Добавить Сотрудника", "addUser")
    .addItem("Пересчитать Ганта", "calcGant")
    .addToUi();
}