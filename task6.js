// write  a function called "get season " that take a month as a number (1 for january  2 for february and so on) and returns  the corresponding  season.
// the  season are define as  follows :
// spring :march (3) to may (5)
// summer :june (6) to august (8)
// autumn :september (9) to november (11)
// winter :december (12), january(1) to february (2)
// ans:
// let getSeason = 12;
function myFunc(getSeason) {
  
  switch (true) {
    case (getSeason >= 3 && getSeason <= 5):
      console.log("spring");
      break;
    case getSeason >= 6 && getSeason <= 8:
      console.log("summer");
      break;
    case getSeason >= 9 && getSeason <= 11:
      console.log("autmn");
      break;
    case getSeason === 12 || getSeason >= 1 && getSeason <= 2:
      console.log("winter");
      break;

    default:
      console.log("invalid");
      break;
  }
}
myFunc(12)






// let getSeason ="";
// function myFunc(getSeason) {
   
//     switch (true) {
//       case getSeason >= 3 && getSeason <= 5:
//         console.log("Spring");
//         break;
//       case getSeason >= 6 && getSeason <= 8:
//         console.log("Summer");
//         break;
//       case getSeason >= 9 && getSeason <= 11:
//         console.log("Autumn");
//         break;
//       case getSeason == 12 || (getSeason >= 1 && getSeason <= 2):
//         console.log("Winter");
//         break;
//       default:
//         console.log("Invalid input");
//     }
//   }
//   myFunc(getSeason);