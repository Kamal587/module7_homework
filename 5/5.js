'use strict'


class ElectroAppliance {
    constructor(options){
        this.name = options.name,
        this.device = 'electro'
    }
    
    applianceOnOff(power){
        if(power > 6) {
            console.log(`${this.name} потребляет в среднем ${power} В при включении в розетку`)
        } else {
            console.log(`${this.name} потребляет в среднем ${power} В при выключении`)
        }
    }
}



class Device extends ElectroAppliance{
    constructor (options) {
        super(options)
        this.current = options.current,
        this.voltage = options.voltage
    }
    
}


const teapot = new Device({name:'чайник', current: '2', voltage:'14V'});
console.log(teapot)
teapot.applianceOnOff(4)