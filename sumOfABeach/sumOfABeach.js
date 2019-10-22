function sumOfABeach(beach) {
  let i = 0;
  let a = beach.toLowerCase();
  while (a.includes("sand")) {
    a = a.replace("sand", "");
    i++;
  }
  while (a.includes("water")) {
    a = a.replace("water", "");
    i++;
  }
  while (a.includes("fish")) {
    a = a.replace("fish", "");
    i++;
  }
  while (a.includes("sun")) {
    a = a.replace("sun", "");
    i++;
  }
  return i;
}

module.exports = sumOfABeach;
