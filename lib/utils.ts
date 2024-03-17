//The reason Number.EPSILON is added to num before rounding is to handle precision issues when dealing with floating-point numbers.

//In JavaScript, due to the way floating-point numbers are represented, certain numbers might not round as you'd expect. For example, 0.1 + 0.2 in JavaScript results in 0.30000000000000004, not 0.3. This can lead to unexpected results when rounding.

//By adding Number.EPSILON to num, you ensure that the number is slightly nudged over the rounding threshold in these edge cases, leading to a more expected rounding behavior.

//Here's an example:
//console.log(Math.round(1.005 * 100) / 100); // Output: 1
//console.log(Math.round((1.005 + Number.EPSILON) * 100) / 100); // Output: 1.01

export const round2 = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100