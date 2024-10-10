/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";

import * as CRUD from "./crud";

// Creating a new row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Inserting the row and storing the generated RowID
const newRowID: RowID = CRUD.insertRow(row);

// Creating an updated row object with age
const updatedRow: RowElement = { ...row, age: 23 };

// Updating the row with the new information
CRUD.updateRow(newRowID, updatedRow);

// Deleting the row by its ID
CRUD.deleteRow(newRowID);
