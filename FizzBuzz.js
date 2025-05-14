function FizzBuzz() {
  for (let n=1 ; n <= 20; n++){
    let output = "";
    if (n%3 == 0) output += "Fizz";
    if (n%5 == 0 && n%3 != 0) output += "Buzz";
    if (n%5 == 0 && n%3 == 0) output += "FizzBuzz";
    console.log(output || n);
    }  
}
FizzBuzz();
