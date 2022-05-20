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
