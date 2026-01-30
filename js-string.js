//! ### Task-1:
// Count how many times a string has the letter `a`

let str = "JavaScript is a amazing Programing language";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === "a") {
    count++;
  }
}
console.log("The letter 'a' appears :", count);

//! ### Task-2:
// Count how many times a string has the letter `a` or `A`

let string =
  "I am a hard working programmer and Always ima achiee amazing result.";

let counts = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i].toLowerCase() === "a" || string[i].toUpperCase() === "A") {
    counts++;
  }
}
console.log("String has the letter 'a' or 'A' :", counts);

//! ### Task-3:
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`

let check = "Hey Programmer the what do you education";

let vowels = "aeiou";

let stri = true;

for (let i = 0; i < vowels.length; i++) {
  if (!check.toLocaleLowerCase().includes(vowels[i])) {
    stri = false;
    break;
  }
}
console.log(stri ? "yes" : "no");
 


//! ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


let replace = "You should be able to check whether x or X exists. After that, search online how to replace a character in a string."

function replacechar(str){
  str = str.replace(/x/g, "y");
  str = str.replace(/X/g, "Y")
  return str
}
console.log(replacechar(replace))