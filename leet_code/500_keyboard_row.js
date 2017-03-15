/**
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function(words) {
    var result_a=[];
    var a_1 = 'qwertyuiop'.split('');
    var a_2 = 'asdfghjkl'.split('');
    var a_3 = 'zxcvbnm'.split('');


    for(var i=0;i<words.length;i++){
        word=words[i].toLowerCase()
        var flag_1=0; var flag_2=0; var flag_3=0
        for(var char=0;char<word.length;char++){
            if (a_1.includes(word[char])) {
                flag_1=1
            }else if (a_2.includes(word[char])) {
                flag_2=1
            }else if (a_3.includes(word[char])) {
                flag_3=1
            }
        }
        if ((flag_1+flag_2+flag_3) === 1) {
            result_a.push(words[i])
        }
    }
    return result_a
};
