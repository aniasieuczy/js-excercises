console.log("hello from app.js");
// numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers2= [1,2,3,4,5,8];
// negative= [0,0];
// console.log(numbers);
// console.log(numbers2);

// function findNotConsecutive(arr){
//     let prev = arr[0];
//     let temp;
//     for(let i =1; i<arr.length; i++) {
//         if(prev + 1 != arr[i]) {
//           temp=arr[i];
//           return temp;
//           break;
//         }
//         prev++;
//     }
//     return null;
//     }
// console.log('Solution for findNotConsecutive:');
// console.log('numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];')
// console.log(findNotConsecutive(numbers));
// console.log('numbers2= [1,2,3,4,5,8];')
// console.log(findNotConsecutive(numbers2));
// console.log('Solution for findNotConsecutive([4,5,6,7,9,10]));')
// console.log(findNotConsecutive([4,5,6,7,9,10]));
// console.log('find from negative ');
// console.log(findNotConsecutive(negative));
// console.log('----------------------------------------------------------------');
// function multiply (arr) {
//   const multiplication = arr.reduce((accumulator, current) => {
//     return accumulator * current;
//   });
//   return multiplication;
// };
// console.log('SOLUTION FOR MULTIPLICATION:')
// console.log(" multiply([1,2,3,4])")
// const multiplication = multiply([1,2,3,4]);
// console.log(multiply([1,2,3,4]));
// console.log('----------------------------------------------------------------');
// let hello = "hello";
// let HELLO = 'HELLO';

// function isAllCaps (someString) {
//    if(someString == someString.toLocaleUpperCase()) {
//     return true;
//    } else {
//     return false;
//    };
// }
// console.log('Solution for isAllCaps:');
// console.log('isAllCaps(hello)')
// console.log(isAllCaps(hello));
// console.log('isAllCaps(HELLO)')
// console.log(isAllCaps(HELLO));
// console.log('isAllCaps(Ania)')
// console.log(isAllCaps("Ania"));
// console.log('----------------------------------------------------------------');
// function reverse (word) {
//     const reversedWord = [];
//     for(let a=word.length; a >= 0; a--) {
//         reversedWord.push(word.charAt(a));
//         // console.log(reversedWord);
//     }
//     return reversedWord.join('');
// }

// console.log('Solution for reverse(katar)');
// console.log(reverse('katar'));
// const aristotelis = 'Werner Vígi';
// console.log('----------------------------------------------------------------');
//     function printNameOnBillboardCalculatePrice(name, price=15) {
//         // const characters = name.length;
//         // const billboard = characters * 30;
//         // return billboard;
//         let total = 0;
//         for(let b = 0; b< name.length; b++) {
//             total = total + price;
//         }
//         return total;
//     }
// console.log("Solution for printNameOnBillboardCalculatePrice");
//     console.log(printNameOnBillboardCalculatePrice(aristotelis));
// console.log('----------------------------------------------------------------');
//     const square = [1,2,2];

//     function squareSum(numbers) {
//         let sum = 0;
//         for(let d = 0; d < numbers.length; d++) {
//             let toPower = Math.pow(numbers[d], 2);
//             sum = sum + toPower;
//         }
//         return sum;
//     }
// console.log("Solution for squareSum");
// console.log(squareSum(square));
// console.log('----------------------------------------------------------------');
// duplicateExample = [1,1,1,2,3,5,99,100];
//     function distinct(a) {
//         noDuplicates = [];
//           for(let e = 0; e < a.length; e++){
//                if(!noDuplicates.includes(a[e])){
//                  noDuplicates.push(a[e]);
//                } else {
//                  continue;
//                }
//         }
//       return noDuplicates;
//       }
// noDuplicates = [...new Set(a)];
// console.log(noDuplicates);
// }
// console.log("Solution for duplicateExample");
// console.log(distinct(duplicateExample));
// console.log('----------------------------------------------------------------');
// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break;
//       case 2:
//         name = 'Venus'
//         break;
//       case 3:
//         name = 'Earth'
//         break;
//       case 4:
//         name = 'Mars'
//         break;
//       case 5:
//         name = 'Jupiter'
//         break;
//       case 6:
//         name = 'Saturn'
//         break;
//       case 7:
//         name = 'Uranus'
//         break;
//       case 8:
//         name = 'Neptune'
//         break;
//     }
//     return name;
//   }
//   console.log(getPlanetName(5));
// console.log('----------------------------------------------------------------');
// var countSheep = function (num){
//     let sheeps = [];
//     for(let f= 1; f <= num; f++) {
//         let part = `${f} sheep...`;
//         sheeps.push(part);
//     }
//     return sheeps.join('');
//   }
// console.log("Solution for countSheep");
// console.log(countSheep(5));
// console.log('----------------------------------------------------------------');
//   function removeChar(str){
//     let last = str.length - 1;
//     // debugger;
//      let newStr = str.slice(1, last);
//     console.log(newStr);
//     return newStr;
//    };
// console.log("Solution for removeChar");
//    removeChar('pAniap');
// console.log('----------------------------------------------------------------');
//    function bonusTime(salary, bonus) {
//         if(bonus) {
//             salary = salary * 10;
//         }
//         return `£${salary}`;
//    }
//    console.log(bonusTime(4000, false));
//    console.log(bonusTime(4000, true));
// console.log('----------------------------------------------------------------');
//    function isIsogram(str) {
//      if(str.length = 0) {
//       return true;
//     } else {
//       str = str.toLowerCase();
//     }

//     let changeToArr =str.split("");
//     let sortedArray = changeToArr.sort();
//     console.log(sortedArray);
//      for(let g=0; g < str.length; g++) {
//       if (sortedArray[g] == sortedArray[g+1]) {
//         return false;
//       }
//     }
//       return true;
//    }

//    console.log(isIsogram("Anna"));
//    console.log(isIsogram("nikos"));
//    console.log(isIsogram(""));
// console.log('----------------------------------------------------------------');
//    function abbrevName(name) {
//     nameArr = [];
//     for(l = 0; l < name.length; l++) {
//       nameArr.push(name[l]);
//     }
//     nameArr = name.split(" ");
//     initials = [];
//     console.log(nameArr);
//     initials.push(nameArr[0].charAt(0).toUpperCase());
//     initials.push(nameArr[1].charAt(0));
//     return initials.join(".");
//    }
//    console.log(abbrevName("anna Szpecht"));
// console.log('----------------------------------------------------------------');
//  const sequenceSum = (begin, end, step) => {
//   let sum = 0;
//   if(step > end) {
//     return 0;
//   } else {
//     for(let i = begin; i <= end; i=i+step) {
//       sum = i + sum;
//     }
//   }
//  return sum;
//  }

//  console.log(sequenceSum(2,6,2));
//  console.log(sequenceSum(1,5,3));
// console.log('----------------------------------------------------------------');
//   function arithmetic(a, b, operator){
//     let result = 0;
//     switch(operator){
//         case "add":
//           result = a + b;
//         break;
//         case "subract":
//           result= a - b;
//           break;
//         case "multiply":
//           result = a  * b;
//           break;
//         case "divide":
//           result = a / b;
//         break;
//         default:
//           return result;
//     }
//     return result;
//   }
// console.log(arithmetic(2, 2, "add"));
// console.log('----------------------------------------------------------------');
// function getCount(str) {
//   let vowCount = 0;
//   vow = "";
//   for (let i = 0; i <= str.length; i++) {
    
//     if(str.charAt(i) == "a"){
//       vowCount = vowCount + 1;
//     } else if(str.charAt(i) == "e") {
//       vowCount++;
//     } else if(str.charAt(i) == "i") {
//       vowCount++;
//     } else if(str.charAt(i) == "o") {
//       vowCount++;
//     } else if(str.charAt(i) == "u") {
//       vowCount++;
//     } 
//   }
//   return vowCount;
// }

// console.log(getCount("abracadabra"));
// console.log('----------------------------------------------------------------');
// function squareDigits(num){
//   let number = '' + num;
//   // console.log(number);
//   numberArr = [];
//   for(let i = 0; i< number.length; i++) {
//     numberArr.push(number[i]);
//   }
//   // console.log(numberArr);
//   let squredDigits = 0;
//   let sumOfSquaredDigits = [];

// function squareDigits(num){
//   let number = '' + num;
//   // console.log(number);
//   numberArr = [];
//   for(let i = 0; i< number.length; i++) {
//     numberArr.push(number[i]);
//   }
//   // console.log(numberArr);
//   let squredDigits = 0;
//   let sumOfSquaredDigits = [];

//   for(let j = 0; j < numberArr.length; j++) {
//     let n = parseInt(numberArr[j]);
//     squaredDigits = Math.pow(n, 2);
//     sumOfSquaredDigits.push(squaredDigits);
//   }
//   return parseInt(sumOfSquaredDigits.join(''));
// }
// console.log(squareDigits(9119));
// console.log(squareDigits(2112));

// function disemvowel(str) {
//   let noVowel = str.replace(/a|e|i|o|u/ig, "");
//   return noVowel;
// }

// console.log(disemvowel("This website is for losers LOL!"));
// console.log('----------------------------------------------------------------');
//   for(let j = 0; j < numberArr.length; j++) {
//     let n = parseInt(numberArr[j]);
//     squaredDigits = Math.pow(n, 2);
//     sumOfSquaredDigits.push(squaredDigits);
//   }
//   return parseInt(sumOfSquaredDigits.join(''));
// }
// console.log(squareDigits(9119));
// console.log(squareDigits(2112));
// console.log('----------------------------------------------------------------');
// function disemvowel(str) {
//   let noVowel = str.replace(/a|e|i|o|u/ig, "");
//   return noVowel;
// }

// console.log(disemvowel("This website is for losers LOL!"));
// console.log('----------------------------------------------------------------');
// function highAndLow(numbers){
//   numbers = numbers.split(" ");
//   // console.log(numbers);
//   return Math.max(...numbers) + " " + Math.min(...numbers); 
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
// console.log('----------------------------------------------------------------');
// function descendingOrder(n){
  // array = [];
  // string = n.toString();
  // for(let i = 0; i <= string.length; i++) {
  //   array.push(string[i]);
  // }
  // console.log(array);
  //  for(let i = 0; i < array.length - 1; i++) {
  //   for(let j = i + 1; j < array.length; j++) {
  //     if(parseInt(array[i]) < parseInt(array[j])) {
  //       temp = array[i];
  //       array[i] = array [j];
  //       array [j]= temp;
  //     } 
  //   }
  // }
  // return array.join("");
  //another solution also fail with 0
//     nToString = n.toString();
//     nBackToNumArr = nToString.split("");
//     nBackToNumArr.sort((a, b) => b - a);
//     nToNumArr = nBackToNumArr.join("");
//     return nToNumArr;
// }
// console.log(descendingOrder(0, 0));
// console.log(descendingOrder(013456789));
// console.log('----------------------------------------------------------------');
// function accum(s) {
//   const result = []
//   const lowerCase = s.toLowerCase()

//   for(let i = 0; i < lowerCase.length; i++) {
//     let string = lowerCase[i].toUpperCase()
//     for(let j = 0; j < i; j++) {
//       string = string + lowerCase[i];
//     }
//     result.push(string);
//   }
//   return result.join("-")
// }
// console.log(accum("abc"));
// console.log('----------------------------------------------------------------');
// function getMiddle(string) {
//   newArr = [];
//   let middle;
//   for(let i = 0; i < string.length; i++) {
//     if(string.length % 2 !== 0){
//       middle = Math.ceil(string.length / 2 - 1);
//       newArr.push(string[middle]);
//     } else {
//       middle = Math.round(string.length/2);
//       newArr.push(string[middle - 1]);
//       newArr.push(string[middle]);
//     }
//     // console.log(newArr);
//     return newArr.join("");
//   }
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log('----------------------------------------------------------------');
// function filter_list(l){
// const numbersOnly = l.filter(x => {
//  return typeof x === 'number';
// })
// return numbersOnly
// }

// console.log(filter_list([1, 2, 'a', 'b']));
// console.log(filter_list([1,'a','b',0,15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));
// console.log('----------------------------------------------------------------');
// var isSquare = function (n) {
//   let squared = Math.sqrt(n);
//   if ( n === 0) {
//     return true;
//   } else if (squared % 1 != 0) {
//     console.log(squared % 1);
//     return false;
//   } else if (squared % squared === 0) {
//     console.log(Math.sqrt(n));
//     console.log( n * n);
//     return true;
//   } 
//  return false;
// }
// console.log(isSquare(4));
// console.log(isSquare(3));
// console.log(Math.sqrt(3));
// console.log(5 * 5);
// console.log(Math.sqrt(5));
// console.log(Math.sqrt(25));
// console.log('----------------------------------------------------------------');
function XO (str)  {

// if(str.includes("x") && str.includes("o")) {
let countX = 0;
let countO = 0;
  for(let i = 0; i<= str.length; i++) {
    if(str[i]=== "x" || str[i] === "X"){
      countX++;
    } else if (str[i] === "o" || str[i] === "O") {
      countO++;
    }
  }
if(countX === countO){
    return true;
} else if (!str.includes("x") && !str.includes("o") ) { 
  return true;
} 
return false;
}

console.log(XO("xxoo"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
// console.log('----------------------------------------------------------------');
// String.prototype.toJadenCase = function() {
  function toJadenCase(string) {

  caps = [];
  let words = string.split(" ");
  console.log(words);

  for(let i = 0; i < words.length; i++) {
    word = words[i];
    caps.push(word[0].toUpperCase()+ word.slice(1));
  }
return caps.join(" ");
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
