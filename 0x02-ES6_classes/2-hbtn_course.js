export default class ALXCourse {
  constructor(name, length, students) {
    ALXCourse.validateString(name);
    this._name = name;

    ALXCourse.validateNumber(length);
    this._length = length;

    ALXCourse.validateObject(students);
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set students(obj) {
    ALXCourse.validateObject(obj);
    this._students = obj;
  }

  set name(str) {
    ALXCourse.validateString(str);
    this._name = str;
  }

  set length(num) {
    ALXCourse.validateNumber(num);
    this._length = num;
  }

  static validateNumber(num) {
    if (typeof num !== 'number') {
      throw new Error(`${num} must be a number`);
    }
  }

  static validateString(str) {
    if (typeof str !== 'string') {
      throw new Error(`${str} must be a string`);
    }
  }

  static validateObject(obj) {
    if (typeof obj !== 'object') {
      throw new Error(`${obj} must be an object`);
    }
  }
}
