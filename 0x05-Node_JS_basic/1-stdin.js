// Import readline module to handle user input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display welcome message and wait for user's input
console.log("Welcome to Holberton School, what is your name?");

// Wait for the user's input and process it
rl.question("", (name) => {
  console.log(`Your name is: ${name}`);
  rl.close(); // Close the interface after input is processed
});

// Handle the closing of the readline interface
rl.on("close", () => {
  console.log("This important software is now closing");
});
