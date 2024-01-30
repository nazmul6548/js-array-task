/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
// for
// let myNumber = 1;
for (let i = 1; i <= 40; i++) {
    if (i % 2 === 1) {
        continue;
        
    }
    console.log(i);
    
    
    
}

//while
let num = 1;
while (num < 40) {
    num++;
    if (num % 2 !== 0) {
        continue;
    }
    // console.log(num);
    
} 


