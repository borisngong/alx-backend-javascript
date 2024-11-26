process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("readable", () => {
  const input_data = process.stdin.read();

  if (input_data) {
    process.stdout.write(`Your name is: ${input_data}`);
  }
});

process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
