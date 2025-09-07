import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
   let size = nums.length;

  for(let i=0;i<size-1;i++){
    snapshot(nums);
    if(nums[i]<nums[i+1])
      continue;
    
    let pointer=i+1;
    while(pointer>0){

      if(nums[pointer]<nums[pointer-1]){
        let temp=nums[pointer-1];
        nums[pointer-1]=nums[pointer];
        nums[pointer]=temp;
        snapshot(nums);
      }
      else
        break;

      pointer--;
    }
  }
  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
