
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let num = 81;
let sum = 0;
while ( num <= 131) {
    if (num % 2 !==0) {
        sum = sum +num
      
    }
    
    num++
    
}
console.log(sum,"sum of all the odd numbers from 81 to 131");
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let myNum = 206;
let mySum = 0;
while (myNum <= 311) {
    if (myNum % 2 ===  0) {
        mySum = mySum + myNum;
        // console.log(mySum);
        
    }
    myNum++;
    
}
console.log(mySum,"sum of all the even numbers from 206 to 311");

/*programming hero*/