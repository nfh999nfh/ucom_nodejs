// "use strict"; // 會檢查使用前有無宣告
function foo() {
    console.log('inside foo begin:', current)
    var current = 300;
    implyGlobal = 500;  // 沒有用var宣告，會直接變全域變數!!!
    console.log('inside foo after:', current)
    console.log('inside foo, implyglobal=', implyGlobal)
}

foo()
//console.log(current)
console.log(implyGlobal)
implyGlobal += 300
console.log(implyGlobal)
