const square = function (x){
  return x * x;

};

console.log(square(8));


const squareArrow = (x) => {
return x * x;
};
console.log(squareArrow(10));


const squareArrow2 = (x) =>  x * x;
  
  console.log(squareArrow2(4));


  const getFirstName =(FullName) =>{
   return FullName.split(' ')[0];

}

console.log(getFirstName('Danilo Assis'));


const getFirstName2 = (FullName) => FullName.split(' ')[0];

console.log(getFirstName2('Darlan Assis'));