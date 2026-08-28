/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x
    let left = 2
    let right = Math.floor(x/2);
    while(left <= right){
        let m = left + Math.floor((right-left)/2);
        if(x==m*m) return m
        else if (x<m*m){
            right = m-1
        }else{
            left = m+1
        }
    }
    return right

};