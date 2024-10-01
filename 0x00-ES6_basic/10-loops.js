export default function appendToEachArrayValue(array, appendString) {
  const neueArray = [];
  for (const value of array) {
    neueArray.push(appendString + value);
  }

  return neueArray;
}
