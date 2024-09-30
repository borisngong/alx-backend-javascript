export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let to ensure block scope
  let task2 = true;  // Use let to ensure block scope

  if (trueOrFalse) {
    let task = true;   // This task is scoped to the if block
    let task2 = false; // This task2 is scoped to the if block
  }

  return [task, task2]; // The original task and task2 from outside the if block
}

