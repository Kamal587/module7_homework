'use strict'


function func(obj) {
    for(let key in obj){
       if (obj.hasOwnProperty(key)) {
        console.log(key + ' -> ' + obj[key] + ' years')
       }
    }
}
const child = {
    mike: 12,
    lysi: 15,
    jack: 11
}
func(child)