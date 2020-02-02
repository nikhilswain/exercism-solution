import { get } from "http";

//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
   constructor(strArray) {
    this.array = strArray.split('\n').map(ele => ele.split(' ').map(Number));;
  }

  get rows() {
    return this.array;
  }

  get columns() {
    return this.array[0].map((col,i) => this.array.map(row => row[i]));
  }
}
