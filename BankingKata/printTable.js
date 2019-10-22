function printTable(arr) {
  let keys = Object.keys(arr[0]);
  const nextLine = "\r" + "\n";
  let heading = Object.keys(arr[0]).join("\t");

  let str = nextLine;
  str += heading;

  arr.forEach(function(obj) {
    str += nextLine + Object.values(obj).join("\t");
  });
  console.log(str);
}

module.exports = printTable;
