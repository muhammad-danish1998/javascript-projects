// ==================================================

// var city = prompt(`Enter your City Name`);
// if(city === 'karachi'){
//     document.write(`Welcome to city of lights`)

// }
// else{
//     document.write(`You are not from karachi`)
// }

// ==================================================

// let colour = prompt("color of road traffic signal");
// if(colour ==="red"){
// document.write(`Must Stop`)
// }
// if(colour ==="yellow"){
//     document.write(`Ready to Move`)

// }
// if(colour ==="green"){
//     document.write(`Move now`)

// }

// ==================================================

// var a = 4;
// if (++a === 5) {
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){

//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// if("car" < "cat"){

//     alert("car is smaller than cat");
//     }

// ==================================================

// let sub1 = +prompt(`Enter First Subject Number`);
// let sub2 = +prompt(`Enter Second Subject Number`);
// let sub3 = +prompt(`Enter Third Subject Number`);
// let sum = sub1 + sub2 + sub3 ;
//  let percentage = (sum / 300) * 100;
//  console.log(`your Percentage is ${percentage} %`)

//  if(percentage >= 80 ){
//     console.log(`Grade : A-ONE`);
//     console.log(`Remarks : Excellent`)
//  }
//  else if(percentage >= 70 ){
//     console.log(`Grade : A`);
//     console.log(`Remarks : Good`)
//  }
//  else if(percentage >= 60 ){
//     console.log(`Grade : B`);
//     console.log(`Remarks : Need Improvment`)
//  }
//  if(percentage < 60 ){
//     console.log(`Grade : F`);
//     console.log(`Remarks : Sorry`)
//  }
// ==================================================

// let secret = 4;
// let num = +prompt(`Enter your choice number`);
// if(num === secret){
//     alert(`Bingo You are Right`)
// }
// else if(num ==3){
//     alert(`YOu are Very near`)

// }

// ==================================================

// let a = 51;
// if(a % 2 == 0){
//     alert(`even number`)
// }
// else{
//     alert('old')
// }

// ==================================================

// let num1 = +prompt(`Enter First Number`);
// let num2 = +prompt(`Enter Second Number`);
// let op = prompt(`Enter Operation (+ - / * )`);

// if(op == "+"){
//     alert(num1 + num2)
// }
// if(op == "-"){
//     alert(num1 - num2)
// }
// if(op == "/"){
//     alert(num1 / num2)
// }
// if(op == "*"){
//     alert(num1 * num2)
// }

// ==================================================

// let num = +prompt(`Enter Number`);
// if(num == 0){
//     alert('number is Zero')
// }
// else if(num > 0){
//     alert('number is Positive')
// }
// else if(num < 0){
//     alert('number is Negative')
// }

// ==================================================
// let password = prompt("enter your password ");

// if (password == "") {
//     alert("fileld the field")
// }
// else {
//     let cpassword = prompt("enter your Password Again ");

//     if (password == cpassword) {
//         alert("Login successfully")
//     }
//     else {
//         alert("Password is NOt Matched")
//     }
// }

// ==================================================
// ============= table program

// let num = +prompt(`Enter Number For Table Print`);
// for(i = 1; i <=10; i++){
//     document.write(`${num} X ${i} = ${num * i} <br />`)
// }
// document.write(`Good Luck Pakeeza eman !!!!`)

// ============= triangle program

// for (let i = 1; i <= 8; i++) {
//   console.log(i);
//   for (let j = 1; j <= i; j++) {
//     document.write("@ &nbsp");
//   }
//   document.write(`<br />`);
// }



// ---------------------------------- Assigment 3 -------------------------- 

// var edu = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
// console.log(edu)

// ---------------------------------------------------------------------- 

// var studentds = ['Danish','Ali','Ayesha'];
// var score = [350.2,200,500];
// var total_marks = 500;
// for(let i = 0; i<score.length; i++){
//     // console.log((score[i]/total_marks)*100)
//     console.log(`Score of ${studentds[i]} is ${score[i]}. Percentage: ${(score[i]/total_marks)*100}%`)
// }

// ---------------------------------------------------------------------- 

// var colours = [];
// colr1 = prompt('which colour you want to add at begining of an array');
// colours.unshift(colr1);
// colr2 = prompt('which colour you want to add at End of an array');
// colrpos = +prompt('which Position you want to add colour');
// colrposcolor = prompt('enter colour');


// colours.push(colr2);
// colours.splice(0,0,"red",'blue')
// console.log(colours)
// colours.shift()
// console.log(colours)
// colours.pop();
// console.log(colours)
// colours.splice(colrpos,0,colrposcolor);
// console.log(colours)

// ---------------------------------------------------------------------- 
// let cities = ["karachi","Lahore","Islamabad","peshawar"];
// let selectedCity = cities.slice(2,4);
// console.log(cities)
// console.log(selectedCity)

// var arr = [1,1,2,3,4,3];
// console.log(arr)
// var newArr = [...new Set(arr)];
// console.log(newArr)

// ---------------------------------------------------------------------- 

// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["st","nd","rd","th"];
// for(let i =0; i<aCities.length; i++){
//     console.log(`${i+1}${o[i]} choice is ${aCities[i]}`)
// }

// ---------------------------------------------------------------------- 

// var a = [4,9,5];
// var b = [9,4,9,8,4]

// const oneArray = () =>{
//     let newArr = [...a , ...b]
//     return [...new Set(newArr)];
// }


// console.log(oneArray().sort())

// ---------------------------------------------------------------------- 
// let num = []
// for(let i = 1; i<=15; i++){
// num.push(i);
// }
// console.log(`Counting : ` ,num)
// console.log(`Counting : ` ,num.reverse())
// for(let i = 0; i<num.length; i++){
//     if(num[i] % 2 == 0){
//         console.log(`Even Numbers`,num[i])
        
//     }
//     else if(num[i] % 2 != 0){
//         console.log(`Odd Number `,num[i])
//     }
// }

// ---------------------------------------------------------------------- 

// A = [24, 53, 78, 91, 12];
// console.log(A)
// console.log(Math.max(...A))
// console.log(Math.min(...A))


// ---------------------------------------------------------------------- 


// A = [20,53,78,4,91,12];
// parseInt(A);
// let b = A.sort()
// console.log(b)

