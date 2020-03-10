var util = require('util')

// console.log(123 == '123', 25.4 == '25.4', 0 == '0')
// console.log(123 === '123', 25.4 === '25.4', 0 === '0')
var a1 = [null, undefined, 0, false, NaN, '']
for (i = 0; i < a1.length; i++) {
    for (j = i + 1; j < a1.length; j++) {
        result = util.format('%s == %s? %s',a1[i], a1[j], a1[i]==a1[j])
        console.log(result)
        // console.log('is', a1[i], '===', a1[j], '==>',a1[i] === a1[j])
        console.log('------------')
    }
}