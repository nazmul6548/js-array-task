// extraction methods :
// 1.slice
// 2.substring
// 3.substr
// now we start slice
const mySlice = ["apple","orange","banana","cat","cow"];
// const result = mySlice.slice(2);
// console.log(result);

// const output = mySlice.slice(1,-3);
// console.log(output);
// const textMes = "good for nothing";
// const res = textMes.slice(2,-8);
// console.log(res);


// const mySlicee = ["apple","orange","banana","cat","cow"];
// mySlicee.push("jambura")
// console.log(mySlicee);
// mySlicee.splice(0,1 ,"watermelon")
// console.log(mySlicee);
// mySlicee.pop();
// console.log(mySlicee);

const myNumber = [1,2,3,4,5,6,7,8];
const includess =myNumber.includes(4);
console.log(includess);
const index =myNumber.indexOf(4);
console.log(index);
const another =myNumber.splice(1,0 ,800);
console.log(another);
console.log(myNumber);