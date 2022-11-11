function node(val) {
  return {
    val: val,
    right: null,
    left: null,
    count: 0,
    add: (val) => {
      console.log(val);
      console.log(this.val);
    },
  };
}

let foo = node("value1");
console.log(foo);
foo.add("yarg");
