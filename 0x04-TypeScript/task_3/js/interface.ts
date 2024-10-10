// RowID type representing a unique identifier for a row
export type RowID = number;

// Interface for defining a row element with optional age
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
