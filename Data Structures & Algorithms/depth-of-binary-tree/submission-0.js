/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        let depth = 0;

        if (!root) return depth; 
        let leftDepth = this.maxDepth(root.left)
        console.log(root.val,leftDepth, "leftDepth")
        let rightDepth = this.maxDepth(root.right)
        console.log(root.val, rightDepth, "rightDepth")
        depth = 1 + Math.max(leftDepth, rightDepth)
        return depth
    }

    // console.log displays in return order not visit order
}
