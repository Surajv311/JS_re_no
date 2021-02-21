var name = "Max";
var age = 29;
var hasHobbies = true;
/*
var -you can declare multiple variables with the same name. 
The variable will then hold the latest value. It is function scoped.

let - It’s similar to 'var', since it can be reassigned, 
but it’s scoped to the nearest enclosing block, ~block-scoped, not the nearest function block.

Eg. 'var' vs 'let' 

for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

for (let j = 0; j < 5; j++) {
  console.log(j); // 0 1 2 3 4
}

console.log(i); // 5
console.log(j); // ReferenceError: j is not defined

const - It's like 'let' with one distinction: you can't reassign the variable.

*/

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
