let num =[1, 2, 3, 9, 4 ,5]

for(let i=0; i<num.length;i++){
    console.log(num[i])
}
num. forEach((element)=>{
console.log(element*element)

})
let name="Shuja"
let arr=Array.from(name)
console.log(arr)


// for(let i of num)
//     console.log(i)

for(let i in num)
    console.log(num[i])