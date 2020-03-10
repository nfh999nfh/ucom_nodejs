function Car() {
}
// field
Car.prototype.speed = 0
Car.prototype.number = ""
Car.prototype.fuel = 0
// method
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
Car.prototype.isOverSpeed = function (speedLimit) {
    return Car.prototype.speed > speedLimit
}
function HybridCar() {

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batteryLimit = 50000
HybridCar.prototype.totalLength = function () {
    return this.fuel * 21 + this.batteryLimit / 500
}

var myCar1 = new Car()
console.log(typeof myCar1, typeof Car)
myCar1.setSpeed(60)
myCar1.number = "AAA-1234"
console.log(myCar1.number + " has speed:" + myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(50))
//
var myCar2 = new HybridCar()
console.log(typeof myCar2, typeof HybridCar)
myCar2.setSpeed(60)
myCar2.number = "DDD-5678"
console.log(myCar2.number + " has speed:" + myCar2.speed)
console.log(myCar2.isOverSpeed(100), myCar2.isOverSpeed(50))
myCar2.batteryLimit=100000
myCar2.fuel = 70
console.log("myCar2 total length=",myCar2.totalLength())