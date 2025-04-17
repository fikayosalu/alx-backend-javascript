export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Constructor = this.constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }

  // This static getter allows subclasses to override how cloneCar works
  static get [Symbol.species]() {
    return this;
  }
}
