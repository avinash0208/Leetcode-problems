/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    const isPalindrome=(s)=>{
        return s===s.split('').reverse().join('')
    }

    for(let i=0;i<words.length;i++){
        if(isPalindrome(words[i])) return words[i]
    }
    return ''
};