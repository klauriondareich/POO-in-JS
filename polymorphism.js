// Polymorphism

// function Geometry(){
//   this.title  = "Figure";
// }

function Square(){
  
}
Square.prototype.draw = function(){
  console.log("Drawing Square")
}

function Circle(){

}

Circle.prototype.draw = function(){
  console.log("Drawing Circle")
}

// Square.prototype = Object.create(Geometry.prototype);
// Square.prototype.constructor = Square;

let obj = [
  new Square(),
  new Circle()
]

for (let shape of obj) {
  shape.draw()
}