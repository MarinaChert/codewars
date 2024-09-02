// DESCRIPTION:
// Create a combat function that takes the player's current health 
// and the amount of damage received, and returns the player's new health. 
// Health can't be less than 0.

// Solution
function combat(health, damage) {
    let res = health - damage;
    return res < 0 ? 0 : res;
}

console.log("Result:", combat(20, 30));