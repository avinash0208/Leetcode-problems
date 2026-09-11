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
 * @return {number}
 */

// TOP DOWN Approach
// var maxDepth = function(root) {
//     let maxDepth=0
//     if(!root) return 0
//     const findDepth=(curr,depth)=>{
//        if(depth>maxDepth){
//             maxDepth=depth
//        }
//        curr.left && findDepth(curr.left, depth+1)
//        curr.right && findDepth(curr.right, depth+1)

//     }
//     findDepth(root,1)
//     return maxDepth
// };

// Bottom UP approach

var maxDepth = function(root) {
    if(!root) return 0
    // MaxDepth at ith sub-tree = 1 + Max(depth at left subtree, depth at right subtree)
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};