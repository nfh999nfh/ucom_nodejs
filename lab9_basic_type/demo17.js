var x = 123
var y = new Number(123)
console.log(typeof x, typeof y)
console.log(x == y, x === y)

function echoMe(name) {
    console.log("echo name:",name)
}
echoMe("Mark")
echoMe()
echoMe(undefined)
echoMe(null)
echoMe('p','q','r')
echoMe(['p','q','r'])