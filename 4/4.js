'use strict'



function ElectroAppliance (name) {
    this.name = name,
    this.device = 'electro'
}

ElectroAppliance.prototype.applianceOnOff = function (power) {
    if(power > 6) {
        console.log(`${this.name} потребляет в среднем ${power} В при включении в розетку`)
    } else {
        console.log(`${this.name} потребляет в среднем ${power} В при выключении`)
    }
    
}


function Device(name, current, voltage){
    this.name = name,
    this.current = current,
    this.voltage = voltage
}
Device.prototype = new ElectroAppliance()

const teapot = new Device('чайник', '2', '14V');
teapot.applianceOnOff(4)







