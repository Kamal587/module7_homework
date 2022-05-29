'use strict'

let user = {
    name: "John",
    surname: "Smith",
    num: 10,
    bull: false
  };
  
  function strObj(str, obj) {
    let values = Object.values(obj);
    return values.includes(str);
    
  };
  
  let res = strObj('Smith', user);
  console.log(res);


