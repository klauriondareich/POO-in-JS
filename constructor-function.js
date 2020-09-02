function vitesseLineaire(rayon, vitesse_rotation){
    this.rayon = rayon,
    this.vitesse_rotation = vitesse_rotation,
    this.pi =  3.14,
    this.calcul = function(){
      return 2*this.pi*this.vitesse_rotation*this.rayon
    }
}

// vitesse lineaire disc1
let disc1 = new vitesseLineaire(12, 3);
let result1 = disc1.calcul();
console.log("disc1 : ", result1);


// vitesse lineaire disc2
let disc2 = new vitesseLineaire(9, 8);
let result2 = disc2.calcul();
console.log("disc2 : ", result2);

// Check vitesseLineaire Constructor
console.log("constructor : ", vitesseLineaire.constructor);

// Abstraction OOP principle
function Circle(){
  let defaultLocation = {x: 0, y: 0};
  Object.defineProperty(this, 'defaultLocation', {
    get:function(){
      return defaultLocation
    },
    set:function(value){
      return value
    }
    // value: {x: 0, y: 0},
    // writable: true,
    // configurable: true,
  })
}
let circle =  new Circle();
console.log("default location" , circle.defaultLocation);
circle.defaultLocation.x = 12;
circle.defaultLocation.y = 7;
console.log("default location" , circle.defaultLocation);
console.log("constructor : ", circle.constructor);

Circle.prototype.greeting = function(name){
  return 'Greet '+ name
}
