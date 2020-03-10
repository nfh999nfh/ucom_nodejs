// 0, "", NaN, null, undefined
var condition = undefined
if (condition) {
    console.log("return true")
} else {
    console.log("return false")
}

var elements = [0, "", NaN, null, undefined]
console.log("type of elements:", typeof elements, Array.isArray(elements))

console.log(null == null);
console.log(null === null);
console.log(undefined == undefined);
console.log(undefined === undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log(typeof null ,typeof undefined);
console.log({} == {});
console.log(1 == 1);
console.log('1' == '1');