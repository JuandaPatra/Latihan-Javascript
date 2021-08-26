// var d = new Date()
// console.log(d)


// let Mobil =[
//     {
//         mobil:"Toyota",
//         asal:"Jepang",
//         jenis:"SUV",
//         stok:9
//     },
//     {
//         mobil:"Kia",
//         asal:"Korea",
//         jenis:"MPV",
//         stok:3
//     }
// ]
// class Car{
//     constructor(mobil,asal,jenis,stok){
//         this.mobil=mobil
//         this.asal=asal
//         this.jenis=jenis
//         this.stok=stok
//     }
// }

// let mobilBaru =new Car("Fiat","Italia","Sport Car",4)
// console.log(mobilBaru)

// console.log(Mobil[0].mobil)

// let text =()=>{
//     let hl ="hello World"
//     console.log(hl)

// }
// text()

// var sum =0
// for (i=4;i<8;i++){
//     if(i==6){
//         continue
//     }
//     sum+=i
// }
// console.log(sum)

// let palindrome = (str) => {
//     var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     console.log(reverseStr === lowRegStr);
// }

// palindrome("RaCe CaRess")
// palindrome("aaBaa")

// let abcd = ['a', 'b', 'c', 'd'];
// let ab = abcd.slice(0, 2);
// let bc = abcd.slice(1, 3);
// let bcd = abcd.slice(1, 4);


// console.log(abcd)
// console.log(ab)

// function fib(n){
//     if(n<2){
//         return n
//     }
//     return fib(n-1)+fib(n+2)
// }

// console.log(fib(10))

// function fibo (n){
//     let res =[0,1]
//     for (let i=2;i<=n;i++){
//     let a =res[i-1]
//     let b =res[i-2]
//     res.push(a+b)
//     }
//     return res[n]
// }
console.log(fibo(10))

let fee = [9100000, 9800000, 9500000, 10300000, 9300000].filter(item => {
    return item - (item * 0.05) > 9_000_000
})
console.log(fee)

// let res = ''

// for(let i = 0;i < 5;i++){
//     for(let j = 5;j > i;j--){
//         res += ' * '
//     }
//     res += '\n'
// }

// console.log(res)
// let res = ''

// for(let i = 0;i < 5;i++){
//     for(let j = 5;j > i;j--){
//         res += ' * '
//     }
//     res += '\n'
// }
// for(let k = 0;k < 4;k++){
//     for(let l = 0;l <= k + 1;l++){
//         res += ' * '
//     }
//     res += '\n'
// }

// console.log(res)

class LivingThings {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.alive = true
    }

    eat = () => {
        console.log('eating')
    }

    breed = () => {
        console.log('breed')
    }
}
// INHERITANCE dari livingthings (livingthings => human)
class Human extends LivingThings {
    constructor(name, age, pet) {
        super(name, age)
        this.pet = pet
    }

    work = () => {
        console.log('work')
    }
}

// inheritance dari human (livingthings => human => animal)
class Animal extends Human {
    constructor(name, age, pet, fly) {
        super(name, age, pet)
        this.fly = fly
    }

    tail = () => {
        console.log('tail')
    }
}

let human1 = new Human('Budi', 20, 'dog')
let animal1 = new Animal('Monkey', 5, false, false)
console.log(human1)
console.log(animal1)
