myStorage = localStorage;
myStorage.clear();
var Man = function(name,dob) {
  this.name = name;
  this.dob = dob;
};

  Man.prototype.validateName = function(){
  console.log(this.name + " Is a total badass.");
  return this.name;
};

  Man.prototype.sayMyBirthday = function(){
    console.log("I was born on " + this.dob);
    return this.dob;
  };
  Man.prototype.save = function(){

      myStorage.setItem(this.name,JSON.stringify(this));
  }

bob = new Man ("Bobby","June 3rd");
