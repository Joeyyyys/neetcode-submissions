class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = strs.map(str => (str === "" ? "This_Is_A_Empty_String" : str)).join("|");
        console.log("string", string)
        return string
    }
    // "string"
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") {
            return [];
        }
        return str.split("|").map(s => (s === "This_Is_A_Empty_String" ? "" : s));
    }
}
