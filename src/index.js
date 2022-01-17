
// You should implement your task here.

module.exports = function towelSort(matrix=[]) {
  let newArr = [];
  if (matrix.length > 1) {
    newArr = matrix.map((arr, index) => {
      if (index == 1 || index % 2 == 1) {
        return arr.reverse()
      } else { return arr }
    }).flat(Infinity);

  } else { return [] }

  return newArr;
 
}
