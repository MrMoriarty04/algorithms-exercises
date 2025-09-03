import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // do cool stuff here
let swapped=true,swap;
    while(swapped){
        snapshot(nums);
      swap=false;
      for(let i = 0 ; i<nums.length;i++){
        if(nums[i]>nums[i+1]){
          let temp = nums[i];
          nums[i]=nums[i+1];
          nums[i+1]=temp; 
          swap = true;
            snapshot(nums);

        }
      }
        if(swap===false)
          swapped=false;        
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
