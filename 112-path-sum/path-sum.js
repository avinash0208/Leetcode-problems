/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let ans = false
    if(!root) return ans

  const findSum=(curr, sum)=>{
    let currSum = curr.val+sum
    if(!curr.left && !curr.right){
        if(currSum == targetSum){
            ans = ans|| true
        }
    }
    curr.left && findSum(curr.left,currSum)
    curr.right && findSum(curr.right,currSum)
  }

  findSum(root,0)
  return ans
};