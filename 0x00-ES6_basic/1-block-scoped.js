export default function taskBlock(trueOrFalse) {
  const task = false;  // Original value
  const task2 = true;  // Original value

  if (trueOrFalse) {
    // Reassign the values without redeclaring
    return [true, false];
  }

  return [task, task2];
}
