class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    /**
     *  tracker = {1:1, 2:1, 3:2}
     *  nums = [1, 2, 3, 3]
     *                   ^
     */
    hasDuplicate(nums) {
        const tracker = {};

        for (let idx = 0; idx < nums.length; idx+= 1) {
            const currNum = nums[idx];
            if (tracker[currNum] !== undefined){
                return true
            }
            tracker[currNum] = true  
        };
        return false 
    };
};

