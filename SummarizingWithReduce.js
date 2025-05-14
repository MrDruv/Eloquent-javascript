// sum of an array
const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((acc,num) => acc+num, 0);
console.log(sum);
// flatten an array
let value=[[1,2],[2],[3],[4],[5,6],[7]];
let flat=value.reduce((acc,val)=>acc.concat(val),[]);
console.log(flat);
console.log(...new Set(flat));
