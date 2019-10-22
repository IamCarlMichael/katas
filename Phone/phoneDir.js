function phone(strng, num) {
  const regex = /\n/g;
  const arr = strng.split(regex);
  let count = arr.filter(element => element.includes(num));

  if (count.length === 0) {
    return `Error => Not found: ${num}`;
  } else if (count.length === 1) {
    let filtered = arr.find(element => element.includes(num));

    const name = filtered.substring(
      filtered.indexOf("<") + 1,
      filtered.indexOf(">")
    );
    const nameWithSpace = "<" + name + ">";
    const nameToReplace = new RegExp(nameWithSpace, "gi");

    filtered = filtered.replace(nameToReplace, "");

    let number = filtered.substring(
      filtered.indexOf("+") + 1,
      filtered.indexOf(" ", filtered.indexOf("+"))
    );
    str = number.replace(";", "");

    const delNumber = "+" + number + " ";
    filtered = filtered.replace(delNumber, "");

    let address = filtered.replace(/[_/$?*,;!:]/g, " ");
    address = address.replace(/  +/g, " ");
    address = address.replace("+" + num, "");
    address = address.trim();

    const details = `Phone => ${num}, Name => ${name}, Address => ${address}`;

    return details;
  } else if (count.length > 1) {
    return `Error => Too many people: ${num}`;
  }
}

module.exports = phone;
