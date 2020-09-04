
//double equal vs triple equal
//double equal does not check data type

const first = 9;
const second = "9";
if (first == second){
    console.log('True but in === it would be False bcos === also checks what type of data');
}else{
    console.log('False');
}
