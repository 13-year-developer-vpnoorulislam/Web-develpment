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
// let i = 1;
// let tableNumber = 2;
// while(i <= 10){
//     // console.log(tableNumber, ' x ' , i , ' = ' ,i*tableNumber);
//     // document.getElementById('id').innerHTML += tableNumber + ' x ' + i + ' = '  + i*tableNumber + "<br>";
//     console.log(`${tableNumber} x ${i} = ${i*tableNumber}`); // escape character is considered a only one character
//     i++;
// }
function change_col(){
    document.getElementById('navbar').style.borderBottom = 'none';
}
function col() {
    document.getElementById('navbar').style.borderBottom = '1px solid #FEFEFE;';    
}
//Arrays
// let marks = [99,99,97,100,99,98];
// let subjects = ["Maths" , "Physics" , "Chemistry" , "Computer Science" , "English" ,"Urdu"];
// // console.log(marks);
// console.log(marks.length);
// // console.log(marks[0]);
// let i = 0;
// let total = 0;
// while (i<marks.length){//REPEATS THE LOOP AS LONG AS THE CONDITION IS TRUE
//     total += marks[i];
//     console.log(`${subjects[i]}: ${marks[i]}`);
//     i++;
// }
// console.log(`Total: ${total}`);
// let abdul = ['Noorul','Yusuf','Fathima','Makkah','Tarique','Abdullah'];
// for(let kids of abdul){ // iterate over values
//     console.log(kids.toUpperCase());
// }
// for(let kids in abdul){ // iterates over keys
//     console.log(kids.toUpperCase());
// }
//To find Average
// stu_mark = [85,97,44,37,76,60];
// let total = 0;
// for(let i = 0;i<stu_mark.length;i++){
//     total += stu_mark[i];
// }
// let avg = total/stu_mark.length;
//     console.log(`Average: ${avg}`);
//Applying discount
// let items = [250,645,300,900,50];
// let i = 1;
// for(let price_tag of items){
//     console.log(`Item ${i}: ${price_tag - price_tag * 10/100 }`);
//     i++;
// }
// let something = ["asdf", 'asdfasdf'];
// let msg = (a,b)=> {
//      console.log(a+b);
// }
// msg(5,5);
// msg();
// msg = 5;
// console.log(msg);
let str = prompt('Enter the string:');
let str_vow = [],str_con = [];
let no_vow = 0,no_con = 0;
function vow(string){
    let vowels = ['a','A','e','E','i','I','o','O','u','U'];
     for (let letter of string){
        for (let _vow_letter of vowels){
            if (letter === _vow_letter){
               no_vow++;
               str_vow.push(_vow_letter);
            }
        }
     }
     no_con = string.length - no_vow;
     for (let i = 0;i< str.length;i++){
        str.replace(/str_vow[i]/," ");
     }
    //  str_con.push(str);
     console.log(`No of Vowels: ${no_vow}\nVowel included in the string:${str_vow}\nNo of Consonants: ${no_con}\nConsonants included in the string:${str}`);
}
vow(str);
