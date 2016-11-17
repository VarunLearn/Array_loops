
var arr = [30, 1, 20, 3, 80];
// purpose: create array with five numbers that returns the highest number
// signature: (Array) -> Int
// examples:
//   highestNumber([1,4,2]) -> 4
//   highestNumber([-1,-2,-4]) -> -1
function highestNumber(array) {
  var max = array[0];
  array.forEach(function(e) {
    if (e > max) {
      max = e;
    }
  })
  return max;
}

// purpose: creates a function that finds the lowest number
// signature: (array) -> Int
// examples: lowestNumber([1,4,2]) ---> 1
// lowestNumber([-1,-2,-4]) --->4

function lowestNumber(oneFour) {
  var low = oneFour[0];
  oneFour.forEach(function(x) {
    if (x < low) {
      low = x;
    }
  });
  return low;
}

//returns a positive int

function makePositive(x) {
  if (x < 0) {
    return -x;
  }
  return x;
}

//creates the smallest number close to 0

function smallestNumber(arr) {
  var smallest = makePositive(arr[0]);
  var index = 0;
  arr.forEach(function(x,i) {
    if (makePositive(x) < smallest) {
      smallest = makePositive(x);
      index = i;
    }
  });
  return arr[index];
}

// creates a function that calculates the sum of (arr)
function sum (arr) {
  var add = 0;
  arr.forEach(function(x){
    add += x;
  });
  return add;
}
// creates a function that calculates the mean of (arr)
function mean(arr) {
  var s = sum(arr);
  return s / arr.length;
}

// Creates a function that finds the index of the highest number
function indexHighestNumber (arr) {
  var highest = arr[0];
  var index = 0;
  for (var i =0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
      index = i;
    }
  }
  return index;
}

// sort siblings by alphabetical order
function getLowerCaseVal(s,i) {
  return s.toLowerCase().charCodeAt(i);
}
// Sort your parents names in reverse alphabetical order.
parents.sort(function(a,b) {
  var i = 0;
  var comp = getLowerCaseVal(b,i)-getLowerCaseVal(a,i);
  while (comp === 0) {
    comp = getLowerCaseVal(b,++i)-getLowerCaseVal(a,++i);
  }
  return comp;
});
//Sort all names in reverse order
function nameInArr(name,arr) {
  var inIt = false;
  for (var i = 0; i < arr.length; i++) {
    if (name === arr[i]) {
      inIt = true;
    }
  }
  return inIt;
}
//Sort all names in reverse alphabetical order
function evenElements(arr) {
  var newArr = [];
  arr.forEach(function(e) {
    if (e % 2 === 0) {
      newArr.push(e);
    }
  });
  return newArr;
}
//Create a function that returns an array with only the odd elements from the array.
function oddElements (arr) {
  var nwArray = [];
  arr.forEach(function(x) {
    if (x % 2 != 0) {
      nwArray.push(x);
    }
  });
  return nwArray;
}
// Creates a function to return a function and a new array and consequently return function of each array
function mapArray(arr,fun) {
  var newArr = [];
  arr.forEach(function(e) {
    newArr.push(fun(e));
  });
  return newArr;
}
// Creates a function that returns a new array and pushes the element for which the function is true
function filterArray(arr,fun) {
  var newArr = [];
  arr.forEach(function(e) {
    if (fun(e)) {
      newArr.push(e);
    }
  });
  return newArr;
}

var i = 0;
while (i<10) {
  console.log(i);
  i++;
}

for (var a= 10; a>0; a--){
  console.log (a);
}

function mergeArray(arr1,arr2) {
  var merged = arr1.concat(arr2).sort();
  var retArr = [merged[0]];
  var p = 0;
  for (var i = 1; i < merged.length; i++) {
    if (retArr[p] != merged[i]) {
      retArr.push(merged[i]);
      p++;
    }
  }
  return retArr;
}

function fillArray(length,value) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}

function keep(x) {
  if (x === "") {
    return false;
  }
  else if (x === false) {
    return false;
  }
  else if (x === null) {
    return false;
  }
  else if (x === 0) {
    return false;
  }
  else {
    return true;
  }
}

function filterArrayValues(arr) {
  var retArr = [];
  arr.forEach(function(e) {
    if (keep(e)) {
      retArr.push(e);
    }
  });
  return retArr;
}

//Purpose: Two indices that add up to the desired numeric value
//Signature: (Int,Array) -> Array
//Examples:
//  findPair(50, [10,20,10,40,50,60,70]) -> [0, 3]
//  findPair(50, [25,25,10]) -> [0, 1]
function findPair(num,arr) {
  var lessThanNum = filterArray(arr, function(x) { return x<num });
  for (var i = 0; i < lessThanNum.length; i++) {
    for (var j = 0; j < lessThanNum.length; j++) {
      if (i != j) {
        if (num === (lessThanNum[i]+lessThanNum[j])) {
          return [i,j];
        }
      }
    }
  }
  return [];
}

//Purpose: This is an 8-ball Q&A program
//Signature: () -> undefined
//Examples: N/A
function eightBall() {
  // Array containing 8ball answers
  var answers = ["Yup!","Fuhgeddaboudit","Maybe","Ask: what would your mother do?","Ask: what would an Australian do","then do the opposite","I don't know"];

  var input = "";
  // This while loop stops the program if the user inputs "STOP" at the prompt
  while (input != "STOP") {
    input = prompt("What is your question?");
    if (input != "STOP") {
      // Creates a randomly generated number to answer the user's question with
      // in the array
      var a = Math.floor(Math.random()*answers.length);
      // Display the answer using an array element.
      alert(answers[a]);
    }
  }
}
