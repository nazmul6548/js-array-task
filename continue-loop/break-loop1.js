/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let loop = 1;
let sum = 0;
while (loop < 200) {
  sum = sum + loop;

  if (sum >= 100) {
    break;
  }
  

  loop++;
}
console.log(sum);