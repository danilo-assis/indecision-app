var nameVar = 'Andrew';
var nameVar = 'mike';
console.log('nameVar', nameVar);

let nameLet = 'jen';
nameLet = 'Julie';
console.log('nameLet', nameVar);

const nameConst = 'Frank';
console.log('nomeConst', nameConst);

// function getPetName() {
//   var petName = 'hal';
//   return petName;
// }

// getPetName();
// console.log(petName);

//block scoping
var fullName = 'Andrew Mead';

if (fullName){
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}