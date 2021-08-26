let fibo = (x) => {
    let arr = [1, 1]
    for (let i = 0; i < x - 2; i++) {
        arr.push(arr[i] + arr[i + 1])
    }
    console.log(arr[x - 1])
}

fibo(10)

let fibon =(x)=>{
    if(x===1){
        return [0,1]
    }
    else{
        let y = fibon(x-1)
        y.push(y[y.length-1]+ y[y.length-2])
        return y
    }
}
console.log()
console.log(fibon(10))

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = 5;

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}

let a = [0,1,2,3,4]
let b =[3,4,5,6]

let c = a.map(item =>item)

console.log(c)