module.exports = function reverseString(string) {
  // Your code here
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let character = string[i];
    reversed += character;
  }
  return reversed;
};

console.log(reverseString("fun"));