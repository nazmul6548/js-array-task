/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
// for example
for (let i = 55; i <= 85; i++) {
    if (i % 2 === 0) {
        continue;
        
    }
    console.log(i);
    
}

// while examples
let num = 55;
while (num < 85) {
    num++;
    if (num % 2 === 0) {
        continue;
        
    }
    console.log(num);
}