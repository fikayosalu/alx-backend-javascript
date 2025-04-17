export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `${this.constructor.name} [${this._code}] {_name: '${this._name}', _code: '${this._code}'} [object ${this._code}]`;
  }
}
