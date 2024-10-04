// airport.js

export default class Airport {
  constructor(name, code) {
    // Assign the constructor attributes to the internal variables
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Override the default string description
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
