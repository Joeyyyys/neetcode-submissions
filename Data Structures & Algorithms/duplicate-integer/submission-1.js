class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checkDuplicates = new Set();

        for (let idx = 0; idx < nums.length; idx+=1) {
            const currNum = nums[idx]
            if (!checkDuplicates.has(currNum)){
                checkDuplicates.add(currNum)
            } else {
                return true;
            };
        };
        return false
    }
}
