function mySum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(arguments.callee)

    return sum
}
console.log(mySum())
console.log(mySum(1, 2, 3))
console.log(mySum('1', '2', '3'))
var x1 = function (a, b) {
    return a * b
}
console.log(x1(3, 5))