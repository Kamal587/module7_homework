'use strict'


function noProto(emptyObj){
emptyObj = Object.create(null)
    return emptyObj;
}
const obj = {}
console.log(noProto(obj))
