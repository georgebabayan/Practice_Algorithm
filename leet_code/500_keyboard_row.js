/**
 * @param {string[]} words
 * @return {string[]}
 */

const findWords = function (words) {
  const result = [];
  const a_1 = 'qwertyuiop'.split('');
  const a_2 = 'asdfghjkl'.split('');
  const a_3 = 'zxcvbnm'.split('');


  for (let i = 0; i < words.length; i++) {
    word = words[i].toLowerCase();
    let flag_1 = 0; let flag_2 = 0; let flag_3 = 0;
    for (let char = 0; char < word.length; char++) {
      if (a_1.includes(word[char])) {
        flag_1 = 1;
      } else if (a_2.includes(word[char])) {
        flag_2 = 1;
      } else if (a_3.includes(word[char])) {
        flag_3 = 1;
      }
    }
    if ((flag_1 + flag_2 + flag_3) === 1) {
      result.push(words[i]);
    }
  }
  return result;
};
