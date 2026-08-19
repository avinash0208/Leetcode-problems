/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s= s.trim()
    let count =0
    for(let i=s.length;i>=0;i--){
        if(s[i]===' '){
            break;
        }else{
            count+=1
        }
    }
    return count-1
}