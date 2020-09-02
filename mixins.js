// mixin
const mixin1 = {
  display1(){
    console.log("Affiche mixin1 ")
  }
};

const mixin2 = {
  display2(){
    console.log("Affiche mixin2 ")
  }
}

function InheritFromMixin(){
  this.display3 = function(){
    console.log("inherit form mixins");
  }
}

// InheritFromMixin.prototype = function test(){
//   console.log("Oops ça à marcher")
// }

function mixins(targetObj, ...mixins){
  Object.assign(targetObj, ...mixins);
}

mixins(InheritFromMixin.prototype, mixin1, mixin2);