// var a = "Hello World";
//
// var b = {
//   self: this,
//   balls: function(){
//     console.log("I Have Balls");
//   },
//   console.log('Called b!')
// }

//javascript
  //creation phase
    //setup memory space for variables and functions (hoisting)
    //before your code has been executed...memory space is allocated
    //variable space exists and is set to undefined


var digit_name = function () {
  var names = ['zero','one'];

  return function (n){
    return names[n];
  };
}();

//4 ways to make an object
//call another power constructer
//Augment the object with privelaged methods


function myPowerConstructor(x){
  var that = otherMaker(x);
  var secret = f(x);
  that.priv = function (){
    //some private code
  };
  return that;

}
