/*let intevalId=setInterval(()=>console.log("hello"),1000)
clearInterval(intevalId)*/

//setTimeout(()=>console.log("hiiii"),2000)
/*
let time=new Date().toLocaleTimeString()
console.log(time)*/
const RandNumCol=(x,min,max)=>{
    let arr=[]
    for(let i=0;i<x;i++){
        let num=Math.floor(Math.random()*(max-min)+min)
        let color=num<0?`rgb(${Math.floor(Math.abs((num/100)*255))},0,0`:`rgb(0,${Math.floor((num/100)*255)},0`
        arr.push({num,color})
    }
return arr
}

console.log(RandNumCol(5,-100,100))