// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
const stringToNumber = function(str) {
  return Number(str);
}

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let totalGoalNumbers = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoalNumbers;
} 

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  let numberOfSpaces = roll * 2;
  let result = position + numberOfSpaces;
  return result;
} 

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
} 


Task 1
https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){

  return string.split(' ');
 }
                             Task 2
https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
   return dna.replace(/T/g, "U"); 
}
                             Task 3
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
let min = function(list){
    
    return Math.min(...list);
}

let max = function(list){
    
    return Math.max(...list);
}
                              Task 4
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    let result = Math.min(...arr);
    if (toReturn === 'index') {
        result = arr.indexOf(result);
    }
    return result;
}
                              Task 5 
https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
    if(queue[queue.length-1]==='wolf'){
     return 'Pls go away and stop eating my sheep';}
    else{
     return 'Oi! Sheep number '+Math.abs(queue.indexOf('wolf')+1-queue.length)+'! You are about to be eaten by a wolf!';
   }
 }
                              Task 6
https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x){
  const newArr=x.map((x)=>x*2);
return newArr;
}

https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
function between(a, b) {
    // your code here
    const arr = []
    if (a<b){
      while (a<=b){
        arr.push(a);
        a++;
      }
    }
    return arr;
  }

// task: Return Negative https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num >0){
    return product= num*-1;
  }
}

//task: Function 3 - multiplying two numbers https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const  multiply  = ( a , b ) => a * b;

//task: https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
  static getVolumeOfCuboid(length, width, height) {
let vol=length* width*height;
    return vol;
}
}

//task: https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
  return 180-(a+b);
}

//task: https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
return i*2;
}

//task: https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
  return n*2-2;
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  let numberOfLitres = time * 0.5;
  let result = Math.floor(numberOfLitres);
  return result;
} 

https://www.codewars.com/kata/551f37452ff852b7bd000139
function addBinary(a,b) {
  let result =  a + b
  let binary = (result % 2).toString();
  for (;result > 1;) {
      result = parseInt(result/2)
      binary = (result % 2) + binary
  }
  return binary
}
