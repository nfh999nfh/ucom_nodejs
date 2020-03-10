function Car() {
    // field
    this.speed = 0
    this.number = ""
    this.fuel = 0
    // method
    this.setSpeed = function (speed) { this.speed = speed }
    this.isOverSpeed = function (speedLimit) {
        return this.speed > speedLimit
    }
}
var myCar1 = new Car()
console.log(typeof myCar1, typeof Car)
myCar1.setSpeed(60)
myCar1.number = "AAA-1234"
console.log(myCar1.number + " has speed:" + myCar1.speed)
console.log(myCar1.isOverSpeed(100), myCar1.isOverSpeed(50))