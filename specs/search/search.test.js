// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  let answer;
  array.forEach(element => {
    if(element.id===id)
        answer=element;
  });
    return answer;
}

function binarySearch(id, array) {
  let ans;
  let left=0,right=array.length-1;

  while(left<=right){
    let mid = Math.floor( (left+right) / 2);
    
    if( array[mid].id == id){
      ans=array[mid];
      break;
    }
    else if (array[mid].id < id) 
      left = mid+1;
    else{
      right =mid-1;
    }
      
  }

  return ans;
}

// unit tests
// do not modify the below code
test("linear search", function () {
  const lookingFor = { id: 5, name: "Brian" };
  expect(
    linearSearch(5, [
      { id: 1, name: "Sam" },
      { id: 11, name: "Sarah" },
      { id: 21, name: "John" },
      { id: 10, name: "Burke" },
      { id: 13, name: "Simona" },
      { id: 31, name: "Asim" },
      { id: 6, name: "Niki" },
      { id: 19, name: "Aysegul" },
      { id: 25, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 2, name: "Marc" },
      { id: 51, name: "Chris" },
      lookingFor,
      { id: 14, name: "Ben" }
    ])
  ).toBe(lookingFor);
});

test("binary search", function () {
  const lookingFor = { id: 23, name: "Brian" };
  expect(
    binarySearch(23, [
      { id: 1, name: "Sam" }, //0
      { id: 3, name: "Sarah" },//1
      { id: 5, name: "John" },//2
      { id: 6, name: "Burke" },//3
      { id: 10, name: "Simona" },//4
      { id: 12, name: "Asim" },//5
      { id: 13, name: "Niki" },//6
      { id: 15, name: "Aysegul" },//7
      { id: 17, name: "Kyle" }, //8
      { id: 18, name: "Jem" },//9
      { id: 19, name: "Marc" },//10
      { id: 21, name: "Chris" },//11
      lookingFor, //12
      { id: 24, name: "Ben" }
    ])
  ).toBe(lookingFor);
});
