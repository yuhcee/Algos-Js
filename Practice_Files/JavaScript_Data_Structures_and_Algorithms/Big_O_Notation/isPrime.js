// import prime from 'prime';

var primeNumbers = [];
var input = 12;

for (let index = 2; index < input; index++) {
  isPrime(index) ? primeNumbers.push(index) : '';
}

function isPrime(num) {
  var prime = num != 1; // Everything but 1 can be prime
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(isPrime(9));
console.log(primeNumbers);
