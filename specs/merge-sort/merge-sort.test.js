/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/



const mergeSort = (nums) => {

  if(nums.length>1){
    return merge(mergeSort(nums.slice(0,nums.length/2)),mergeSort(nums.slice(nums.length/2,nums.length)));
  }

  else return nums;

};

const merge = (leftArray, rightArray) => {
  const results = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      results.push(leftArray.shift());
    } else {
      results.push(rightArray.shift());
    }
  }
  return results.concat(leftArray, rightArray);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
