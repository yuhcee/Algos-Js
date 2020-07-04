// Linear O(n)
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
// exampleLinear(3);

// Quadratic O(n2)
function exampleQuadratic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i, '*');
    for (let j = i; j < n; j++) {
      console.log(j, '$');
    }
  }
}
// exampleQuadratic(3);

// Cubic O(n3)
function exampleCubic(n) {
  for (let i = 0; i < n; i++) {
    console.log(i, '*');
    for (let j = i; j < n; j++) {
      console.log(j, '**');
      for (let k = j; k < n; k++) {
        console.log(k, '***');
      }
    }
  }
}
// exampleCubic(3);

//  Logarithmic  log2(1,000,000)
function exampleLogarithmic(n) {
  for (let i = 2; i <= n; i = i * 2) {
    console.log(i);
  }
}
exampleLogarithmic(100);
