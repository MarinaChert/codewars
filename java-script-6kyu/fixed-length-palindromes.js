// DESCRIPTION:
// Four-digit palindromes start with [1001,1111,1221,1331,1441,1551,1551,...] and the number at position 2 is 1111.
// You will be given two numbers a and b. Your task is to return the a-digit palindrome at position b if the palindromes were arranged in increasing order.
// Therefore, palin(4,2) = 1111, because that is the second element of the 4-digit palindrome series.

// Solution
function palin(a, b) {
    let n;
    let x;
    if (a % 2 === 0) {
        n = a / 2 - 1;
        x = 10 ** n - 1 + b;
        x = String(x) + String(x).split("").reverse().join("");
    }
    else {
        n = Math.floor(a / 2);
        x = 10 ** n - 1 + b;
        x = String(x) + String(Math.floor(x / 10)).split("").reverse().join("");
    }
    return Number(x);
}

console.log("Result:", palin(6, 11));