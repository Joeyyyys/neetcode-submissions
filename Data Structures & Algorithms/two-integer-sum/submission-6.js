class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const seen = {}; 
        const n = nums.length

        for (let idx = 0; idx < n; idx+= 1) {
            const currNum = nums[idx]; 
            const complement = target - currNum

            if (complement in seen) {   // do this check b/c we want to avoid falsy 0 checks or you need to include undefined checks
                return [seen[complement], idx]
            };

            seen[currNum] = idx;
        }

        // for (let idx = 0; idx < nums.length; idx+=1){
        //     const currNum = nums[idx];
        //     for (let jdx = 0; jdx < nums.length; jdx+=1){
        //         const secondNum = nums[jdx];
        //         if (currNum + secondNum === target && idx !== jdx) {
        //             return [idx, jdx]
        //         };
        //     };
        // };
    };
};
