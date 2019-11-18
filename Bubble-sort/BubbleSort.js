function BubbleSort(array) {
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] - array[i + 1] > 0) {
        let number1 = array[i];
        let number2 = array[i + 1];
        array[i] = number2;
        array[i + 1] = number1;
        console.log(array);
      }
    }
  }
  return array;
}
module.exports = BubbleSort;
