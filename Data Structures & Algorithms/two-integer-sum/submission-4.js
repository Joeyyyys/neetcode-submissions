class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const seen = {};

        for (let idx = 0; idx < nums.length; idx+=1) {
            const currNum = nums[idx];
            let  complement = target - currNum; 

            if (complement in seen) {     // we do this since 0 can be falsy, in case we have a 0 complement
                return [seen[complement], idx]
            } else {
                seen[currNum] = idx; // key || value pair 

            }
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
