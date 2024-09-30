export default function taskBlock(trueOrFalse) {
  const task = false;  // Original value
  const task2 = true;  // Original value

  if (trueOrFalse) {
    // Reassign the values without redeclaring
    return [true, false];  // Return values when trueOrFalse is true
  }

  return [task, task2];  // Return original values when false
}
