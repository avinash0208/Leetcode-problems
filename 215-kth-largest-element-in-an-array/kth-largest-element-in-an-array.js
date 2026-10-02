/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minPq = new MinPriorityQueue()
    for(let i =0;i<nums.length;i++){
        minPq.enqueue(nums[i])
        if(minPq.size()>k){
            minPq.dequeue()
        }
    }
    return minPq.front()
};