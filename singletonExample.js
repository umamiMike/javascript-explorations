
var mySingleton = (function( window, undefined){
  var instance = null;
  function initializeNewModule(){
    function myMethod(){
      alert('my method' );
    }
    function myOtherMethod(){
      alert('my other method' );
    }
    return {
      someMethod : myMethod,
      someOtherMethod : myOtherMethod
    };
  }


//keeps it to one instance
function getInstance(){
  if(! instance){
    instance = new initializeNewModule();
  }
  return instance;
}

return {
  getInstance : getInstance
};


})(window);//end Singleton

mySingleton.getInstance().someMethod();//alerts "myMethod"
mySingleton.getInstance().someOtherMethod();
