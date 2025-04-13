let arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);
console.log("Length:", arr.length);
console.log("Push 6:", arr.push(6), arr);
console.log("Pop:", arr.pop(), arr);
console.log("Unshift 0:", arr.unshift(0), arr);
console.log("Shift:", arr.shift(), arr);
console.log("Includes 3:", arr.includes(3));
console.log("Index of 4:", arr.indexOf(4));
console.log("Reverse:", arr.reverse(), arr);
console.log("Sort:", arr.sort(), arr);
console.log("Slice (1,3):", arr.slice(1, 3));
console.log("Splice (1,2):", arr.splice(1, 2), arr);
console.log("Join with '-':", arr.join("-"));
console.log(
  "Map (x2):",
  arr.map((num) => num * 2)
);
console.log(
  "Filter (>2):",
  arr.filter((num) => num > 2)
);
console.log(
  "Reduce (sum):",
  arr.reduce((acc, num) => acc + num, 0)
);
