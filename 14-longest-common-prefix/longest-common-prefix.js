/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    // Start by assuming the first word is the complete prefix
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        // Shorten the prefix while the current word doesn't start with it
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};
