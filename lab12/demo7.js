const p1 = new Promise((resolve, reject)=>{
    console.log("pp")
    console.log("pps s")
    setTimeout(()=>{
        console.log("ss")
        try{
            throw new Error("oops!")
            console.log("no error")
            resolve(1000)
        } catch(e){
            reject(e)
        }
    },2000)
    console.log("pps e")
})
console.log("start p1")
p1.then(result=>console.log("OK! result="+result))
.catch(error=>console.error("Found exception:"+error))
console.log("stop p1")
