array = [[1,2,3],[4,5],[5,6,7]];
let Flattened =array.reduce((flat,current) => flat.concat(current), []);
let unique = [...new Set(Flattened)];
console.log(unique);
