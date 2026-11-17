/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let x=0;

   for(let i=0;i<=nums.length-1;i++){
        if(nums[x]!==nums[i]){
            nums[++x]=nums[i]
        }
   }
    return x+1
};