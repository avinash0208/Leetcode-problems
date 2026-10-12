/**
 * @param {number} n
 * @return {number}
 */

// TOP DOWN

// let dp ={}

// var climbStairs = function(n) {
//     if(n<=2) return n

//     if(!dp[n]){
//         dp[n]=climbStairs(n-1)+climbStairs(n-2)
//     }

//     return dp[n]
// }


// Bottom Up


var climbStairs = function(n) {
    let dp=[0,1,2]

    for(let i=3;i<=n;i++){
        dp[i] = dp[i-2] + dp[i-1]
    }
    return dp[n]
}