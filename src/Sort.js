import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";


function getDigit(number,place,longestNumber){
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function findLongestNumber(array){
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;

  }
  return longest;
}

function sort(array) {

  snapshot(array);
    const longestNumber=findLongestNumber(array);

  const buckets=[[],[],[],[],[],[],[],[],[],[]];

  for(let i = longestNumber - 1; i >= 0 ;i--){
    while (array.length){
      const current=array.shift();
      buckets[getDigit(current,i,longestNumber)].push(current);
    }

    for(let i=0;i<10;i++){
    while(buckets[i].length){
      array.push(buckets[i].shift());
    }
  }
  snapshot(array);
  }  
  return array;
  }
 

export default function SortComponent() {
  clear();
  const fill = 99;
  const nums = new Array(fill)
    .fill()
    .map(() => Math.floor(Math.random() * 500000));
  sort(nums);
  done();
  return <App />;
}
