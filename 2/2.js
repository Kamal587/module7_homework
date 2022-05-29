'use strict'

function strObj(str, obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key) && key == str){
            return true;
        } else {
            return false;
        }
    }
}

const obj = {
    mike: 12, 
    lysi: 15,
    jack: 11,
}

console.log(strObj('mike', obj))


