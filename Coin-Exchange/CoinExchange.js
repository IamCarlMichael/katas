function CoinExchange(amount, coinTypes) {
  let resultsArr = [];

  coinTypes.forEach(element => {
    if (element === amount) {
      resultsArr.push([element]);
    }
  });
  let coinRevArr = coinTypes.filter(function(value) {
    return value < amount;
  });

  for (let i = 0; i < coinRevArr.length; i++) {
    let combination = [];
    combination.push(coinRevArr[i]);
    console.log(combination);
    for (let j = 0; j < coinRevArr.length; j++) {
      while (combination.reduce((a, b) => a + b, 0) < amount) {
        combination.push(coinRevArr[j]);
        if (combination.reduce((a, b) => a + b, 0) === amount) {
          resultsArr.push(combination);
        }
        console.log(combination);
      }
      combination = [];
      combination.push(coinRevArr[i]);
    }
  }
  const final = resultsArr.filter(((r = {}), a => !(r[a] = ++r[a] | 0)));

  console.log(final);

  return final.length;
}

CoinExchange(4, [3, 2, 1]);

module.exports = CoinExchange;
