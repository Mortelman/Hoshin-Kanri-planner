function arrayToDict(arr) {
  const dict = {};
  for (const item of arr) {
    dict[item] = true;
  }
  return dict;
}