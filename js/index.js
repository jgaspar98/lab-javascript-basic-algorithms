// Iteration 1: Names and Input
let hacker1 = "Laura";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "João";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.length === hacker2.length){
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

// Iteration 3: Loops
//3.1
let newHacker1 = '';
for (let i = 0; i < hacker1.length; i++){
    newHacker1 += (hacker1[i].toUpperCase() + ' ');
}
console.log(newHacker1);  


//3.2
/*for (let i = 0; i <= hacker2.length - 1; i--){
    
}


//3.3*/
