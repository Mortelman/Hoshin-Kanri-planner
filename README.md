# Hoshin-Kanri-planner
planner in google sheets, using Hoshin-Kanri method and google App script.
This planner will help you to realize strategy planning in your company.

## How to install Add-on:
  - step 1: open [link]:https://docs.google.com/spreadsheets/d/1X3sBlJh4POIyVoZty3HxKpp4PpisueBIWEAhdXuCzFs/edit?gid=0#gid=0
  - step 2: make clone of this spreadsheet and start your strategy planning with our planner!

## Functional:
  - Hoshin-Kanri table in sheet "Х-матрица", that automaticly apply changes from other lists.
  - funcions in add-on menu, that add new fields to parameters.
  - sheet "Гант", that calculate Gantt chart by tasks and their dependencies.

## Technical requirement:
  - Spreadsheet did not expect cell movement in sheets, all dependencies builded on fixed cells positions.
  - Don`t make changes in sheet "Х-матрица" by your own, all changes in this sheet makes by changing cell content in other sheets.
  - If you want, you can edit Google App script code in your version of spreadsheet, but we are not responsible to this code after changes = ).
  - In the "X-матрица" sheet, correlations are not fully updated, their state is maintained only when the corresponding parameters are changed. To correctly maintain the current state of correlations, you must first add the necessary fields to the "X-матрица" sheet.
  - When constructing a Gantt chart, it is expected that there will be no cyclical dependencies between tasks.


## Contacts
  if you have some questions you can write on fokinstepan34@gmail.com, we will try to solve the problem.
