class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // 
        const ans = []
        for (let idx = 0; idx < 2; idx+=1){

            for (let jdx = 0; jdx < nums.length; jdx+=1) {

                const currNum = nums[jdx];
                ans.push(currNum);
            };

        };
        return ans;
    }
}
