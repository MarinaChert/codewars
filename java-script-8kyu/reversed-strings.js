// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution
function solution(str){
    return str.split("").reverse().join("");
  }
  console.log("Result:",solution("world"));
  console.log("Result:",solution("word"));
console.log("Result:",solution("drow"));