function calcGant() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Гант");
  const tasks_sheet = SpreadsheetApp.getActive().getSheetByName("Задачи");
  const goals_sheet = SpreadsheetApp.getActive().getSheetByName("Годовые цели")
  const tasks = tasks_sheet.getRange(2, 1, tasks_sheet.getMaxRows(), 3).getValues();
  const goals = goals_sheet.getRange(2, 1, goals_sheet.getMaxRows(), 4).getValues();
  const data = sheet.getDataRange().getValues();
  
  const rows = data.slice(1);
  const graph = {};
  const info = {};
  const get_time = {}
  const dp = {}
  const getGoalRow = {}

  for (var i = 0; i < goals_sheet.getMaxRows() && goals[i][0]; ++i) {
    getGoalRow[goals[i][0]] = i + 2;
    goals_sheet.getRange(i + 2, 4).setValue(0);
  }
  
  var counter = 2;
  rows.forEach(row => {
    if (row[0]) {
      const v = row[0];
      if (graph[v] === undefined) {
        graph[v] = []
      }
      dp[v] = 5;
      // info[v] = [row[1], row[3], counter]
      info[v] = { users: smartSplit(row[1]), time: row[3], row: counter };
      for (var user of info[v].users) {
        get_time[user] = 5;
      } 
      const tmp = row[2] ? smartSplit(row[2]) : [];
      for (let u of tmp) {
        if (graph[u] === undefined) {
          graph[u] = []
        }
        graph[u].push(v);
      }
    }
    counter++;
  });
  
  Logger.log(graph);

  const inDegree = {};
  const result = [];
  const queue = [];
  
  for (const node in graph) {
    inDegree[node] = 0;
  }
  
  for (const node in graph) {
    for (const neighbor of graph[node]) {
      inDegree[neighbor]++;
    }
  }
  
  for (const node in inDegree) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }
  
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);
    
    for (const neighbor of graph[current]) {
      // console.log(neighbor);
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  Logger.log(result);

  sheet.getRange('E2:9').setBackground('white');

  for (const node of result) {
    var start = dp[node];
    for (var val of info[node].users) {
      start = Math.max(start, get_time[val]);
    }
    Logger.log(start);
    const time = info[node].time
    Logger.log(time);
    for (var i = start; i < start + time; ++i) {
      sheet.getRange(info[node].row, i).setBackground('blue');
    }
    for (const neighbor of graph[node]) {
      dp[neighbor] = Math.max(dp[neighbor], start + time);
    }

    var corellations = smartSplit(tasks_sheet.getRange(info[node].row, 3).getValue().toString());
    corellations.concat(smartSplit(tasks_sheet.getRange(info[node].row, 3).getValue().toString()));
    // Logger.log(corellations);
    for (var goal of corellations) {
      goals_sheet
        .getRange(getGoalRow[goal], 4)
        .setValue(Math.max(start + time - 5, goals_sheet.getRange(getGoalRow[goal], 4).getValue()));
    }
    for (var val of info[node].users) {
      get_time[val] = start + time;
    }
  }

}
