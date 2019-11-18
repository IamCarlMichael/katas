const BubbleSort = require("./BubbleSort");

describe("Bubble sort", () => {
  it("should return an empty array", () => {
    expect(BubbleSort([])).toStrictEqual([]);
  });
  it("should return an array with a single element when a single element array is passed", () => {
    expect(BubbleSort([2])).toStrictEqual([2]);
  });
  it("should return a sorted array with two elements when a two element array is passed", () => {
    expect(BubbleSort([2, 1])).toStrictEqual([1, 2]);
  });
  it("should return a sorted array with three elements when a three element array is passed", () => {
    expect(BubbleSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
  });
  it("should return a sorted array with four elements when a four element array with negative numbers is passed", () => {
    expect(BubbleSort([2, -1, 3, 3])).toStrictEqual([-1, 2, 3, 3]);
  });
  it("should return a sorted array with four elements when a reversed array is passed", () => {
    expect(BubbleSort([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
  });
  it("should return a sorted array with five elements when a reversed array is passed", () => {
    expect(BubbleSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
