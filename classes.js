const _status = Symbol();
class Person{
  constructor(nom, prenom, age){
    this.nom = nom;
    this.prenom =  prenom;
    this.age = age;
    this[_status] = "Etudiant";
  };
  
  identite(){
    return `Il s'appelle ${this.nom} ${this.prenom} et son age est ${this.age} ans`
  }

  static verification(age){
    if(age <= 17) return "Non élligible"
    else return "élligible"
  }
}

person1 = Person.verification(8);


