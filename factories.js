// Create a factory function
"use strict"

// V = 2piRN
function vitesseLineaire(rayon, vitesse_rotation){
  return {
    rayon,
    vitesse_rotation,
    pi: 3.14,
    calcul(){
      return 2*this.pi*this.vitesse_rotation*this.rayon
    }
  }
}

// vitesse lineaire disc1
let disc1 = vitesseLineaire(12, 3);
let result1 = disc1.calcul();
console.log("disc1 : ", result1);


// vitesse lineaire disc2
let disc2 = vitesseLineaire(9, 8);
let result2 = disc2.calcul();
console.log("disc2 : ", result2)

console.log("constructor : ", disc2.constructor);