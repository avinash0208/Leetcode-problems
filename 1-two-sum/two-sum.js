/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n = nums.length;
    const map = new Map()
    for(let i =0;i<n;i++){
        map.set(nums[i],i)
    }
    for(let i =0;i<n;i++){
        let diff = target - nums[i]
        if(map.has(diff) && map.get(diff)!==i){
            return [i,map.get(diff)]
        }
    }
};