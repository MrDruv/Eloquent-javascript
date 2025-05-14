const users = [{name : "Alice",age : 17 },
		{name : "Bob", age : 18},
		{name : "Can", age : 19}]
const adults = users.filter(users => users.age >= 18)
console.log(adults);

/*To find scripts in  dataset that in  use

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));*/

