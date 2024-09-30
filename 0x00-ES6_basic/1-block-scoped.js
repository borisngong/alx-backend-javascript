export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const since they shouldn't be reassigned
  const task2 = true;

  if (trueOrFalse) {
    // Instead of reassigning, declare new variables inside the block
    const task = true;
    const task2 = false;
    return [task, task2]; // Return the values if trueOrFalse is true
  }

  return [task, task2];  // Return the original values if trueOrFalse is false
}

