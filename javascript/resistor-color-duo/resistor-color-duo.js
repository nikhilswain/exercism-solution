//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const resColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
export const decodedValue = (resistColor) =>{
  let array = [];
  for (let i = 0; i <=1; i++) {
    array.push(resColors.indexOf(resistColor[i]))
    
  }
  return parseInt(array.join(""));
};