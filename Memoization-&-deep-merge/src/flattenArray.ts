const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const merge = (
  array: (number | number[] | (number | (number | number[])[])[][])[]
): number[] => {
  let finalArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      finalArray.push(array[i]);
    } else {
      finalArray = finalArray.concat(array[i]);
    }
  }
  if (finalArray.some((element) => Array.isArray(element)))
    return merge(finalArray);

  return finalArray;
};

console.log(merge(sample));
