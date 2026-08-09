/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max =0
    let streak=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            streak+=1
            if(streak>max)
                max = streak;
        } else {
            streak = 0 
        }
    }
    return max

};