console.log("hello from app.js");
numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers2= [1,2,3,4,5,8];
negative= [0,0];

console.log(numbers);
console.log(numbers2);

function findNotConsecutive(arr){
    let prev = arr[0];
    let temp; 
    for(let i =1; i<arr.length; i++) {
        if(prev + 1 != arr[i]) {
          temp=arr[i];
          return temp;
          break;
        } 
        prev++;
    }
    return null;
    }

    console.log('Solution for findNotConsecutive:');
    console.log('numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];')
    console.log(findNotConsecutive(numbers));
    console.log('numbers2= [1,2,3,4,5,8];')
    console.log(findNotConsecutive(numbers2));
    console.log('Solution for findNotConsecutive([4,5,6,7,9,10]));')
    console.log(findNotConsecutive([4,5,6,7,9,10]));
    console.log('find from negative ');
    console.log(findNotConsecutive(negative));

    function multiply (arr) {
      const multiplication = arr.reduce((accumulator, current) => {
        return accumulator * current;
      });
      return multiplication;
    };

    console.log('SOLUTION FOR MULTIPLICATION:')
    console.log(" multiply([1,2,3,4])")
    const multiplication = multiply([1,2,3,4]);
    console.log(multiply([1,2,3,4]));

    let hello = "hello";
    let HELLO = 'HELLO';

    function isAllCaps (someString) {
       if(someString == someString.toLocaleUpperCase()) {
        return true;
       } else {
        return false;
       };
    }
    console.log('Solution for isAllCaps:');
    console.log('isAllCaps(hello)')
    console.log(isAllCaps(hello));
    console.log('isAllCaps(HELLO)')
    console.log(isAllCaps(HELLO));
    console.log('isAllCaps(Ania)')
    console.log(isAllCaps("Ania"));

    function reverse (word) {
        const reversedWord = [];
        for(let a=word.length; a >= 0; a--) {
            reversedWord.push(word.charAt(a));
            // console.log(reversedWord);
        }
        return reversedWord.join('');
    }

    console.log('Solution for reverse(katar)');
    console.log(reverse('katar'));
    const aristotelis = 'Werner Vígi';
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
    
    function printNameOnBillboardCalculatePrice(name, price=15) {
        // const characters = name.length;
        // const billboard = characters * 30;
        // return billboard;
        let total = 0;
        for(let b = 0; b< name.length; b++) {
            total = total + price;
        }
        return total;
     
    }
    console.log(printNameOnBillboardCalculatePrice(aristotelis));

    const square = [1,2,2];
    
    function squareSum(numbers) {
        let sum = 0;
        for(let d = 0; d < numbers.length; d++) {
            let toPower = Math.pow(numbers[d], 2);
            sum = sum + toPower;
        }
        return sum;
    }
console.log(squareSum(square));

duplicateExample = [1,1,1,2,3,5,99,100];
function distinct(a) {
    noDuplicates = [];
    for(let e = 0; e < a.length; e++){
        noDuplicates.push(a[e]);
        if(a[e] == a[e+1] ) {
            a.splice(e+1, 1);
        }
    }
    console.log(noDuplicates);
    return noDuplicates;
}
// noDuplicates = new Set(a);
// console.log(noDuplicates);
// }



distinct(duplicateExample);

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
