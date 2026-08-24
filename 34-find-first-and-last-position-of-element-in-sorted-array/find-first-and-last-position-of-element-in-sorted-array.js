/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findBound = (isFirst) => {
        let left = 0;
        let right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (nums[mid] === target) {
                bound = mid; // Record the potential answer
                if (isFirst) {
                    right = mid - 1; // Keep searching left for the first occurrence
                } else {
                    left = mid + 1;  // Keep searching right for the last occurrence
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return bound;
    };

    const firstPos = findBound(true);
    // // If the first position is -1, the target doesn't exist in the array
    // if (firstPos === -1) {
    //     return [-1, -1];
    // }
    
    const lastPos = findBound(false);
    return [firstPos, lastPos];
};
