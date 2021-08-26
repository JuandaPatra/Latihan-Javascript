//check data, jika true bernilai satu, false = 0
countTrue=(data)=>{
    // console.log(data)
    // console.log(data.length)
    let count=0
    let truee = data.filter(item => item=== true)
    // console.log(truee.length)
    return truee.length
    
    
    

}

// console.log(countTrue([true, false,true,false]))


toArray =(data)=>{
    // let result = Object.keys(data).map((key)=>[data(key), data(key)])
    let result = Object.entries(data)

    console.log(result)

}

toArray({"a":1, "b":2})

// result =[ [ 'a', 1 ], [ 'b', 2 ] ]


plusFive =()=>{
    return 5
}

fuFactor =(data)=>{
    let hasil = data + plusFive()

    return hasil
}
console.log(fuFactor(2))

// result = 2 +5 =7

concate =(...data)=>{
    // console.log(data.length)
    let array1= Array.prototype.concat(...data)
    return array1
    
    
}

console.log(concate([1],[2], [3], [4]))

console.log(concate([1,2],[3,5]))

arrayMultiples =(num, leng)=>{
    let as =[]
    for (i=1; i<=leng; i++){
        let ss = num * i
        as.push(ss)
    }
    return as
}
console.log(arrayMultiples(7,5))

triangle =(data)=>{
    let n = data * (data+1)/2
    return n
}
console.log(triangle(6))

areaCountry =(nation, num)=>{
    let world = 148940000
    let numTot = num /world * 100 

    return `${nation} is ${numTot.toFixed(2)} % of the total world's Landmass`
}

console.log(areaCountry("Rusia", 17098242))


sortUnsort =(data)=>{
    let ssa = data.sort()
    return ssa
}

console.log(sortUnsort([4, [1], [3]]))

secondLarge =(data)=>{
    let numcount = data.length
    console.log(numcount)
    let aax = data.sort()
    console.log(aax)
    return aax[data.length -2]
}

console.log(secondLarge([90, 20, 30, 50, 70]))
console.log(secondLarge([10,20,30,40,50]))

// let a = [0,1,2,3,4]
// let b =[3,4,5,6]

// let c = a.map(item =>item)

// console.log(c)

let a = [0,1,2,3,4]
let b = [3,4,5,6]

for(key in a){
    // console.log(key)
    console.log(a[key])
    let c = b.filter(item => item === a[key])
    console.log(c)
}

// let s = "I found nemo"
// let sx =s.split(' ')
// console.log(sx)
// let axz= sx.indexOf("nemo")
// console.log(axz)

nemoF =(data)=>{
    let saz = data.split(' ')
    let asz = saz.indexOf("nemo")
    return `I Found Nemo at ${asz+1}`

}
console.log(nemoF("Dory and nemo"))
console.log(nemoF("I nemo am"))

reVs =(data)=>{
    arrInt = Array.from(String(data), Number)
    intArr = arrInt.reverse()
    let a = ''
    for (i=0; i<intArr.length;i++){
        a += intArr[i]
    }
    return a
}
console.log(reVs(1234))
console.log(reVs(71523))

cone =(h, r)=>{
    let coneVol = Math.PI * r*r*r * h / 3
    return coneVol
}

console.log(cone(3,2))


let prod =[{name : "apple", stok :5}, {name:"banana", stok:3}]

let product =[{name : "grape", stok : 2},{name : "apple", stok :2}, {name:"orange", stok :1 }, {name:"banana", stok :1}]

for(i=0; i<prod.length; i++){
		for(j=0; j< product.length; j++){
    if(prod[i].name === product[j].name){
    let stock = prod[i].stok + product[j].stok
    console.log(prod[i].name, stock)
    }
    }
}

for (key of product){
    // console.log(key)
    for(key2 of prod){
        // console.log(key2)
        if(key2.name === key.name){
            console.log(key2.name)
        }
    }
}

num =()=>{
    return 9
}
sa=()=>{
    return 10
}

try {
    num()
    console.log(num())
}
catch(error){
    console.log(error)
}
