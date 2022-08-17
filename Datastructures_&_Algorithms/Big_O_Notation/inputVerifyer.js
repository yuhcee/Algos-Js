function inputVerifyer(minimum, maximum) {
  return function verify(inputValue) {
    if (inputValue < minimum) {
      return 'InputValue is less than minimum';
    } else if (inputValue > maximum) {
      return 'InputValue is greater than maximum';
    } else if (inputValue >= minimum && inputValue <= maximum) {
      return 'Input is in range';
    }
    return 'No input.';
  };
}
const verify = inputVerifyer(10, 30);
console.log(verify(70));
