const age = 2.6;

// if age is only defined it assume it is positive unless const age = 0

if(age){
    console.log('Baby is born');
}else{
    console.log('not yet');
}

// for string 

let name  = "shahrukh";

// if string  is empty,name = NaN,null False but = " ","0" it assume true and let name; undefined it is endefined

if(name.length){
    console.log('name is not empty');
}else{
    console.log('empty');
}

//to check truthy 

let name1  = 98;
if(name1 || name1 == 0){
    console.log('name is not empty');
}else{
    console.log('empty');
}



//scope.js