/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (29.11%)
 * Total Accepted:    177.4K
 * Total Submissions: 607.4K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let stack = '';
    while(n) {
      n = n-1;
      stack = String.fromCharCode(n%26 + 65) + stack;
      n = ~~(n/26);
    }
    return stack
};

/* while(n) {
  const last = n%26;
  const quotient = n/26;
  if(last === 0) {
    stack = 'Z' + stack;
    n = ~~ quotient - 1;
  }else {
    stack = String.fromCharCode(last + 64) + stack;
    n = ~~ quotient;
  }
} */
