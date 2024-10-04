export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    // Validate the type of the 'sqft' attribute
    this.sqft = sqft;
  }

  // Getter for 'sqft'
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = value;
  }
}
