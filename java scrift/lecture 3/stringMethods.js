// UpperCase ,method
let string = "om sirsath";
console.log("UpperCase lette is:",string.toUpperCase());// this s a fuction

//LoweCase methode
let str1  = "OM SIRSATH";
console.log("LowerCase lette is:",str1.toLowerCase());

// Trim method
let str2 = "    om sirsath   ";
console.log(str2.trim());

//str.slice(start,end) methods
let str3 = "Hello sirsath";
console.log(str3.slice(0,5));
console.log(str3.slice(7));  //when end index is omitted.

//str1.concat(str2) methods

let strA = "om";
let strB = " sirsath";
console.log(strA.concat(strB));

//charAt(index) method

let str4 = "hello";
console.log(str4.charAt(3));

// str.replace(searchVal.newvalue)

let str5 = "Om Birla";
console.log(str5.replace("Birla","Sirsath"));

//pactice question 
// Prompt the user to enter full name for them based on the input start username with @,followed by full name asnd ending with the full length.


let fullName = prompt("Enter your fll name :");
let username = "@" + fullName + fullName.length;
console.log(username);
