/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    let j=0;
    while(j<nums.length){
        if(nums[j]==nums[i]){
            j++
        }else{
            nums[++i]=nums[j++]
        }
    }
    return i+1
};