const nums = [3,45,23,44,422,455,665,64];
cosnt  part = nums.slice(2,3);

// no 2 index to less than 3 index(index 3 is not included)
console.log(part);

const removed = nums.splice(2,4);
console.log(removed);