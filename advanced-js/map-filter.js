// map,filter,find,smart way of for loop

const numbers4 = [3,4,5,96,7];
//for (let i = 0; i < numbers4.length; i++){
  //  console.log(i);
//}
const result = numbers4.map(x => x * x);
console.log(result);


// filter
//let result7 = number4.filter(x => x > 6);
//console.log(result7);

//learn for each ,redujce,find(new in es-6)

// apply map,filter,find on an array of objects


const students = [
    {id :26, name :"Shahrukhh"},
    {id :12, name :"Dipjoll"},
    {id:34, name:"John"}
];

const name3 = students.map(s => s.name);
console.log(name3);
const name4 = students.map(gulugulu => gulugulu.id);
console.log(name4);

//to get filter

const bigger = students.filter(s =>s.id >15);
console.log(bigger);

//to find 

const biggerOne = students.find(s => s.id = 26);
console.log(biggerOne);
