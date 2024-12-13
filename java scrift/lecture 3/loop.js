//for loop
  /*let count;
for(count=1; count<=10; count++){
    console.log("om sirsath");
}
console.log("loop has ended");*/
//------------------------------------------------
//calculate the sum of 1 to n number using for loop and while loop.

/*let n = prompt("Enter the value of n :");
let i;
let sum = 0;
for(i = 1; i<=n; i++){
    sum = sum + i;
}
console.log("sum of the number is",sum);*/
//--------------------------------------------------
//while loop
/*let n = prompt("Enter the value of n :");
let i = 1;
let sum = 0;
while(i<=n){
    console.log("i=",i);
    sum = sum + i;
    i++;

}
console.log("sum = ", sum);*/
//------------------------------------------------

// do while loop

/*let i = 1;
do{
    console.log("i=",i);
    i++;
}
while(i<=10);*/
//----------------------------------------------------

//for of loop

/*let str = "omSirsath";
let size = 0;
for(let i of str){  //iterator
    console.log("i=",i);
    size++;
}
console.log("string size =",size);*/
//----------------------------------------------------
//for in loop

/*let student = {
    name : "om sirsath",
    age : 22,
    cgpa : 7.5,
    isPass : true,  

};

for(let i in student){
    console.log("i=",i,",","value=",student[i]);
}*/

//----------------------------------------------------

//practice question 

// Q.1 print all even number from 0 to 100.

/*let num = prompt("Enter the value of n :");

for(let i = 0; i<=num; i++){
    if(i %2 !== 0){
        console.log("num = ",i);
    }
}*/
//------------------------------------------------------

//creat a game here you start with any andom game number.ask the ser to keep guessing the game number untile the user enter correct value.
let gameNumber = 25;
let userNum = prompt("Gess the game number :");
    while(userNum != gameNumber){
        userNum = prompt("you entered wrong number,Guess again :");
    }
    console.log("congatulation,you entered the right number i.e")

