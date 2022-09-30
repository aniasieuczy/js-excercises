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
//     Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
// Test.assertEquals(billboard("Abishai Charalampos"), 570);
// Test.assertEquals(billboard("Idwal Augustin"), 420);
// Test.assertEquals(billboard("Hadufuns John",20), 260);
// Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
// Test.assertEquals(billboard("Claude Miljenko"), 450);
// Test.assertEquals(billboard("Werner Vígi",15), 165);
// Test.assertEquals(billboard("Anani Fridumar"), 420);
// Test.assertEquals(billboard("Paolo Oli"), 270);
// Test.assertEquals(billboard("Hjalmar Liupold",40), 600);
// Test.assertEquals(billboard("Simon Eadwulf"), 390);

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
//     console.log(printNameOnBillboardCalculatePrice(aristotelis));

//     const square = [1,2,2];

//     function squareSum(numbers) {
//         let sum = 0;
//         for(let d = 0; d < numbers.length; d++) {
//             let toPower = Math.pow(numbers[d], 2);
//             sum = sum + toPower;
//         }
//         return sum;
//     }
// console.log(squareSum(square));

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
// console.log(distinct(duplicateExample));

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

// var countSheep = function (num){
//     let sheeps = [];
//     for(let f= 1; f <= num; f++) {
//         let part = `${f} sheep...`;
//         sheeps.push(part);
//     }
//     return sheeps.join('');
//   }
//   console.log(countSheep(5));

//   function removeChar(str){
//     let last = str.length - 1;
//     // debugger;
//      let newStr = str.slice(1, last);
//     console.log(newStr);
//     return newStr;
//    };
//    removeChar('pAniap');

//    function bonusTime(salary, bonus) {
//         if(bonus) {
//             salary = salary * 10;
//         }
//         return `£${salary}`;
//    }

//    console.log(bonusTime(4000, false));
//    console.log(bonusTime(4000, true));

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

function squareDigits(num){
  let number = '' + num;
  // console.log(number);
  numberArr = [];
  for(let i = 0; i< number.length; i++) {
    numberArr.push(number[i]);
  }
  // console.log(numberArr);
  let squredDigits = 0;
  let sumOfSquaredDigits = [];

  for(let j = 0; j < numberArr.length; j++) {
    let n = parseInt(numberArr[j]);
    squaredDigits = Math.pow(n, 2);
    sumOfSquaredDigits.push(squaredDigits);
  }
  return parseInt(sumOfSquaredDigits.join(''));
}
console.log(squareDigits(9119));
console.log(squareDigits(2112));