export default function createInt8TypedArray(length, position, value) {
  // Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);

  // Finally Return the DataView object
  return view;
}
