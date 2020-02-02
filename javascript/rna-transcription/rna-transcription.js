//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.

const DnaToRna = {
  C:'G',
  G:'C',
  T:'A',
  A:'U'
};
export const toRna = (toDna) => {
 return toDna.split("").map(dna => DnaToRna[dna]).join('');
};
