var o1 = {}
var o2 = {
    name: "NodeJS", duration: 14, period: ["Monday", "Tuesday"]
}
var o3 = {}
console.log(typeof o1, typeof o2)
console.log(o1, o2)
console.log(o2.name,o3.name)
o3["name"]="POOP"
o3["duration"]=35
o3["period"]=["Saturday"]
console.log(o2.name,o3.name)
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)
delete o3.name
console.log(o2.name,o3.name)
console.log(delete o2.name); // 屬性可以刪除
console.log(o2.name,o3.name)
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)
console.log(delete o2); // 變數不能刪除
console.log(o2);
// 物件型別的東西可以任意擴增屬性，也可任意刪除屬性
// 變數一旦宣告後，就絕對不可能刪除

var a = 1;
a.neme = 'will'
console.log(a);
console.log(a.name);
console.log(delete a.name);



var oo = {'aa':1,'bb':2};
oo.cc = 555;
console.log(delete oo.cc);
if('cc' in oo){
    console.log("!!");
}
console.log(typeof( oo.cc), oo.cc )
console.log('--------')

var xxx = 'will'
var gg = xxx[0];
console.log(gg)
xxx[0] = 'k'
console.log(xxx[0],xxx)

var hhh = new String("will");
hhh.mmm= 12
console.log(hhh)
var zz = hhh[0];
console.log(zz)
hhh[0] = 'k'
console.log(hhh[0],hhh)