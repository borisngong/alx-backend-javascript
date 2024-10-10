// crud.js

// Inserts a new row and logs the operation
export function insertRow(row) {
  console.log("Insert row", row);
  return Math.floor(Math.random() * Math.floor(1000)); // Returns a random row ID
}

// Deletes a row by ID and logs the operation
export function deleteRow(rowId) {
  console.log("Delete row id", rowId);
}

// Updates an existing row by ID and logs the operation
export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId; // Returns the updated row ID
}
