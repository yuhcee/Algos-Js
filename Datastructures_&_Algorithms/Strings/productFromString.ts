/**
 * You are given an array&lt;string&gt; *( s_array )* containing lowercase letters. Each letter has a numerical value assigned to it according to its order in the alphabet, as follows:
 *  a= 1, b = 2, c = 3, until the end the where z = 26.
 *
 * For s_array, you also have the following parameters:
 * * cnt1 is the number of vowels present in the string.
 * * cnt2 is the number of consonants in the string that have an *"even"* numerical value.
 * * cnt3 is the number of consonants in the string that have an *"odd"* numerical value.
 *
 * Your task is to write a program that calculates the product of cnt1, cnt2, and cnt3 (cnt1 x cnt2 x cnt3).
 *
 * **Keep in mind** -
 * * 0 is a possible answer.
 * * The size of **s_array** is between 1 and 256 (1 &lt;= **s_array.length** &lt;= 256)
 *
 * @param s_array
 * @returns (product: number)
 */

function productFromString(s_array: string[]): number {
    
  const [ letters ] = s_array;
  let cnt1: number = 0;
  let cnt2: number = 0;
  let cnt3: number = 0;
  
  const alphabets: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const vowels: string[] = alphabets.filter(
    (letter: string) =>
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
  );
  const consonants: string[] = alphabets.filter(
    (letter: string) =>
      letter !== 'a' &&
      letter !== 'e' &&
      letter !== 'i' &&
      letter !== 'o' &&
      letter !== 'u'
  );

  function isEven(index:number):boolean {
      return index % 2 === 0
  }

  for(let i = 0; i < letters.length; i++){
      let currentLetter = letters[i];
      if (vowels.includes(currentLetter)) {
        cnt1 = cnt1 + 1;
      }
      else if(consonants.includes(currentLetter) && isEven(letters.indexOf(currentLetter) + 1)){
          cnt2 = cnt2 + 1;
      }
      else {
        cnt3 = cnt3 + 1;
    }
  }
  
  return cnt1 * cnt2 * cnt3;
}

console.log(productFromString(['abcdefgh']));
console.log(productFromString(['abc']));
