// string declaration.
/*let str = "Apna college";
let str2 = "Om sirsath";

console.log(str[50]);*/

//Template Literals
let obj = {
    item : "pen",
    price :10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//console.log("the cost of",obj.item,"is",obj.price);
  let specialString = `om sirsath ${1+2+3}`;
 console.log(specialString);

 //escape character
 console.log("om\nsirsath"); //creat a next line
 console.log("om\tsirsath");//creat a Tab
 
 // length of the string
 let str = "Apna\tcollege";
 console.log("the length of the string is:",str.length);
 