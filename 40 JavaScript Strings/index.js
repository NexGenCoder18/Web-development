let str = "Hello, World!";

console.log("Original String:", str);

// String Length
console.log("Length:", str.length);

// String Methods
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Character at index 1:", str.charAt(1));
console.log("Substring (0,5):", str.substring(0, 5));
console.log("Slice (-6):", str.slice(-6));
console.log("Includes 'World':", str.includes("World"));
console.log("Starts with 'Hello':", str.startsWith("Hello"));
console.log("Ends with '!':", str.endsWith("!"));
console.log("Index of 'o':", str.indexOf("o"));
console.log("Last index of 'o':", str.lastIndexOf("o"));
console.log("Replace 'World' with 'JavaScript':", str.replace("World", "JavaScript"));
console.log("Repeat 2 times:", str.repeat(2));
console.log("Trim:", "   Hello   ".trim());
console.log("Trim Start:", "   Hello   ".trimStart());
console.log("Trim End:", "   Hello   ".trimEnd());
console.log("Split by ',':", str.split(","));

// String Concatenation
let str2 = " Welcome!";
console.log("Concatenation:", str.concat(str2));

// Template Literals
let name = "Priyanshu";
let friend = "Rohan";
console.log(`His name is ${name} and his friend's name is ${friend}`);
