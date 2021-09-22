// Iteration 1: Names and Input
let hacker1 = "Yuki"
console.log(`The driver's name ${hacker1}`);

let hacker2 = "Pauline"
console.log(`The driver's name ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);  
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let name = "";

for (let count = 0; count < hacker1.length; count++){
    name += hacker1[count].toUpperCase() + " ";
};
console.log(name);

let name1 = "";

for (let count = hacker1.length -1; count >= 0; count--){
    name1 += hacker1[count];
}
console.log(name1);

let decided = false;

for (let count = 0; count < Math.min(hacker1.length, hacker2.length);
count++)
{if (hacker1[count] < hacker2[count]){
    console.log("The driver's name goes first");
    decided = true;
    break;
} else if (hacker1[count] > hacker2[count]){
    console.log("Yo, the navigator goes first");
    decided = true;
    break;
}
}
if (!decided) {
   if (hacker1.length === hacker2.length) {
       console.log("What?! You have the same name?")
   } else if (hacker1.length > hacker2.length) {
       console.log("Yo, the navigator goes first")
   } else {
       console.log("The driver's name goes first");
   }
   }



