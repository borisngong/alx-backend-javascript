export default function hasValuesFromArray(set, array) {
  // Use `every()` method to check if every element of
  // the array is present in the set
  return array.every((element) => set.has(element));
}
