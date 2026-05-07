class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const sTracker = {};
        const tTracker = {};

        if (s.length !== t.length) return false 

        for (let idx = 0; idx < s.length; idx+=1) {
            const currSLetter = s[idx];

            if (!sTracker[currSLetter]) {
                sTracker[currSLetter] = 1
            } else {
                sTracker[currSLetter]+= 1
            }
        };

        for (let idx = 0; idx < t.length; idx+=1) {
            const currTLetter = t[idx];

            if (!tTracker[currTLetter]) {
                tTracker[currTLetter] = 1
            } else {
                tTracker[currTLetter]+= 1
            }
        };

        for (const key in sTracker){
            if (sTracker[key] !== tTracker[key]){
                console.log("sTracker[key]", sTracker[key])
                console.log("tTracker[key]", tTracker[key])
                return false; 
            }
        }

        return true;
        
        // if (s.split("").sort().join("") === t.split("").sort().join("")){
        //     return true
        // } 
        // return false
    };
};
