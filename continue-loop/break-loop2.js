/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// ans:
// for (let i = 1; i <= 100; i++) {
    // console.log(i);
    // if (i * i === 4 ) {
    //     break;
        
    // }
    
    // console.log(i);
// }
// quiz
const array = [10, 20, 30, 40, 50, 60, 70,10];

// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//   continue;
//  }
//  console.log(array[i]);

// }
// let tr = "fdtt,ryrfyr,rtrfr2,rtfyrr"
// let hg=tr.includes("rtrfr2");
// console.log(hg);


const fullName = "nazmul islam jewel";
const age = 33;
const p = "i am a self employed"
const userInfo = `username: ${fullName}
                  age: ${age}
                  p: ${p}`;
console.log(userInfo);


var num = 323.3344334;
// var result = num.toPrecision(4);
// console.log(result);
let fruits = ["apple", "banana", "orange"]
fruits[2] = "misty";
let result = fruits[fruits.length-1];
console.log(result);