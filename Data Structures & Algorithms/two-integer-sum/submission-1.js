class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for (let idx = 0; idx < nums.length; idx+=1){
            const currNum = nums[idx];
            for (let jdx = 0; jdx < nums.length; jdx+=1){
                const secondNum = nums[jdx];
                if (currNum + secondNum === target && idx !== jdx) {
                    return [idx, jdx]
                }
            };
        }
    };
};
