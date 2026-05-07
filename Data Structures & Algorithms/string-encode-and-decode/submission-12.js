class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Using a special delimiter that will not appear in the strings
        return strs.map(str => (str === "" ? "EMPTY_STRING" : str)).join("|");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") {
            return [];
        }
        // Split the string by the delimiter and replace "EMPTY_STRING" back to ""
        return str.split("|").map(s => (s === "EMPTY_STRING" ? "" : s));
    }
}
