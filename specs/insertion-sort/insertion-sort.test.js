/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  let size = nums.length;

  for(let i=0;i<size-1;i++){
    if(nums[i]<nums[i+1])
      continue;
    
    let pointer=i+1;
    while(pointer>0){

      if(nums[pointer]<nums[pointer-1]){
        let temp=nums[pointer-1];
        nums[pointer-1]=nums[pointer];
        nums[pointer]=temp;
      }
      else
        break;

      pointer--;
    }
  }

  return nums;

  // code goes here
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("insertion sort-2", function () {
  const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("insertion sort-3", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
