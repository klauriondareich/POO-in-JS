// Parent Class or Super Class
function Forme(){
  this.top = "plate";
  this.bottom = "ronde";
}

Forme.prototype.dessine = function (){
  return 'Esquisse'
}

// Child Class or Sub Class
function Objet(){
  Forme.call(this);
}

// Child Class innerhits from Parent
// Objet.prototype = Object.create(Forme.prototype);
// Objet.prototype.construcor = Objet;

// Intermediate function
function intermediate(Child, Parent){
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.construcor = Child;
}
intermediate(Objet, Forme);

objet_1 = new Objet();
objet_2 = new Objet();