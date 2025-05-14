// for(let i = 1; i <=5; i++){
//     console.log("i = " , i); //repeats the loop as long as the condition is true
// }
// let i = 1;
// while(i <= 5){
//     console.log("i = " , i); //repeats the loop as long as the condition is true
//     i++;
// }
// let j = 40;
// do {
//     console.log("atleast once");
//     j++;
// }while (j <= 50);

// let str = "Shit";
// for(i of str){ // for strings or objects
//     console.log(i);
// }
// let student = {
//     name : "VP NOORUL ISLAM",
//     age : 18 ,
//     boardMark : 592,
// }
// for (let i in student){ //returns key 
//     console.log(student[i]);
// }
//To print all even numbers from 0 to 100
// for(let i = 0; i<= 100 ; i++){
//     if (i % 2 === 0){
//         console.log(" " , i , " ");
//     }
// }

// let gameNum = 20;
// let no_tries = 1;
// let i = 1;
// do {
// let userNum = parseInt(prompt("Enter the Number"));
// if (gameNum === userNum){
//     console.log("You Won with " , no_tries , " number of tries" );
//     break;
// } else{
//     console.log("Shit");
//     no_tries++;
// }
// }while(i <= no_tries);
// let gameNum = 20;
// let no_tries = 1;

// for(let i = 1; i <= no_tries; i++){
// let userNum = parseInt(prompt("Enter the Number"));
// if (gameNum === userNum){
//     console.log("You Won with " , no_tries , " number of tries" );
//     break;
// } else{
//     console.log("Shit");
//     no_tries++;
// }
// }
//Template literals ``
let i = 1;
let tableNumber = 2;
while(i <= 10){
    // console.log(tableNumber, ' x ' , i , ' = ' ,i*tableNumber);
    // document.getElementById('id').innerHTML += tableNumber + ' x ' + i + ' = '  + i*tableNumber + "<br>";
    console.log(`${tableNumber} x ${i} = ${i*tableNumber}`); // escape character is considered a only one character
    i++;
}