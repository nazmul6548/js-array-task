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
const array = [10, 20, 30, 40, 50, 60, 70];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
  continue;
 }
 console.log(array[i]);

}