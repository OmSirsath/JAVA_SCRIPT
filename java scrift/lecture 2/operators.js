//Arithematic operator
/*let a = 3;
let b = 5;
console.log("a+b = ", a + b);
console.log("a-b = ", a - b);
console.log("a*b = ", a * b);
console.log("a/b = ", a / b);
console.log("a%b = ", a % b);
console.log("a**b = ", a ** b);*/
//--------------------------------------------------------------
//unary operator
/*console.log("a = ", a, "& b = ",b );

--a;
--b;
console.log("a = ", a, " b = ",b);*/
//---------------------------------------------------------------
//assignment operator
/*let a = 4;
let b = 7;

a += 4; //a = a + 4;

console.log("a = ", a );*/
//------------------------------------------------------
//conditional statement

/*let age = 54;
let age1 = 12;

if(age >=18 ){
    console.log("you can vote");
}
if(age1 < 18){
    console.log("you cannot vote");
}*/

// let mode = "white";
// let color;

/*if(mode == "dark"){
    color = "black";
}
if(mode == "white"){
    color = "white";
}
console.log(color)*/

//if else

/*if(mode == "dark"){
color = "black"
}
else{
color = "white";
}
console.log(color);*/
//----------------------------------------------------------------------------
// practice  question

// get user to input a number using prompt("enter  a number :") heak if the number is multiple of 5.

/*let num = prompt("enter a number :");
if(num % 5 == 0){
    console.log(num,"is multiple of 5");
}
else{
    console.log(num,"is not multiple of 5");
}*/

//----------------------------------------------------------------------

// write a code which can give grades to student according to their score.

let score = prompt("Enter the score");

if(score >=90 && score <=100){
    console.log(" you got a grade A");
}
else if(score >= 70 && score <=89){
    console.log(" you got a grade B");
}
else if(score >= 60 && score <=69){
    console.log(" you got a grade C");
}
else if(score >= 50 && score <=59){
    console.log(" you got a grade D");
}
else{
    console.log(" FAIL");
}







