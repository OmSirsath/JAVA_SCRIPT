// for loop
/*let marks = [97,56,23,43,54];
for(let i=0; i<=marks.length; i++){
    console.log(marks[i]);
}*/
//----------------------------------------------
//for of loop
/*let marks = [52,85,96,74,52];
for(let ele of marks){
    console.log(ele);
}*/
//-------------------------------------------------

//practice question
//for a given array with marks of the student -[85,97,44,37,76,60],find the average marks of the entired class.

// By for loop
/*let marks = [85,97,44,37,76,60];
let sum = 0;
for(let i=0; i<marks.length; i++){
    sum = sum + marks[i];
}
let average = sum/marks.length;

console.log("The average of the marks is ",average);*/

//By for of loop

/*let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks){
    sum = sum + val;
}
let average = sum/marks.length;

console.log("The average of the marks is ",average)*/

//--------------------------------------------------------

//For a given array withe of 5 items [250,645,300,900,501], All items have an offer of 10% OFF ono them. Change the aray to store final price after
let items = [250,645,300,900,50........................................................................................................................................................................................................................................................................................................................];
for(let i = 0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i]-offer;
}
console.log(items);