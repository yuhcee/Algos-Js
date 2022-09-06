/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher, the meanings of the letters are shifted by some set amount.

 A common modern use is a ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O, and so on.

Write a function that takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
rot13("SERR YBIR?") should decode to the string FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

 * @param {ROT13 encoded string} str 
 * @returns a decoded string
 */

function rot13(str) {
  let output = '';
  const convert = (characterCode) => {
    if (characterCode < 65) {
      output += String.fromCharCode(characterCode);
    } else if (characterCode < 78) {
      output += String.fromCharCode(characterCode + 13);
    } else {
      output += String.fromCharCode(characterCode - 13);
    }
  };

  for (let i = 0; i < str.length; i++) {
    convert(str.charCodeAt(i));
  }
  return output;
}

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('SERR CVMMN!'));
console.log(rot13('SERR YBIR?'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
console.log(rot13('HPURAAN RTOB.'));
console.log(rot13('LBHAT PNRFNE!'));
