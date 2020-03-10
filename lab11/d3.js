//"use strict";
var x1 = 100
x2 = 200
console.log(x1, x2)
console.log(global.x1, global.x2)
console.log('x1 can del : ',delete x1)
console.log('gx1 can del : ',delete global.x1)
console.log('gx2 can del : ',delete global.x2)
console.log(x1)
// console.log(x2)
console.log(global.x1 === x1)
console.log(global.x1 == x1)
console.log(global.x1)