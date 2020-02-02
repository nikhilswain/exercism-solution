//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = string.toLowerCase();
  for (const alpha in alphabet) {
    if (!newString.includes(alphabet[alpha])) {
      return false      
    }
  }
      return true;
};


