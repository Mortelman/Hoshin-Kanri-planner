function smartSplit(string) {
  const regex = /(?:,|^)(?:\s*)(?:"([^"]*)"|([^,]+))/g;
  let matches;
  const result = [];

  while ((matches = regex.exec(string)) !== null) {
    const value = matches[1] || matches[2];
    if (value !== undefined) {
      result.push(value.trim());
    }
  }

  return result;  
}
