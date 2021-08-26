// var names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"]
// var name = [3,4,2,5,1]
// console.log(names.sort((a, b) => a - b))
// console.log(names.sort())
// console.log(name.sort((a, b) => a - b))

// let a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < 3; j++) {
//     sum = sum + a[i][j];
//   }
// }
// console.log(sum)



// let res1 = ''
// for (let k=5; k>0 ; k--){
// 	for(let l=0; l<k; l++){
//   res1 += "*"
//   }
//   res1 +="\n"
// }
// console.log(res1)

// let s = ''
// for(let n=0; n<5; n++){
//   for(let p=0; p<=n; p++){
//     s += `${p+1}`
//   }
//   s += '\n'
// }
// console.log(s)


// let s = ''
// for(let n=0; n<5; n++){
//   for(let p=0; p<=n; p++){
//     if(p===0){
//       s+= `1`
//     }else if(p %2 ===0){
//       s += `${p+(n)}`
//     }else {
//       s += `${p+2}`
//     }
//   }
//   s += '\n'
// }
// console.log(s)

let s = ''
for(let n=1; n<=11; n++){
  if(n %2 ===0){
    continue
  }else{
    for(let p=1; p<=n; p++){
      if(p %2 ===0){
        s += ''
      } else{
        s += `${p}`
      }
  }
  }
  s += '\n'
}
console.log(s)

let f = ''
for (let z =0; z<3; z++){
  for (let y=1 ; y<=5-z; y++){
    f = f + ' '
  }
  for (let x = 1; x<=(2*z+1); x++){
    f = f + `${x}`
  }
  f += '\n'
}
console.log(f)
// let res2 =''
// for(let m=5; m>0; m--){
//   for(let n=0; n<m; n++){
//     if(m===5){
//       break
//     }else{
//       for(p=0; p< m-(m-1); p++){
//         res2 += ' '
//       }
//     } 
//     res2 +="*"
//   }
//   res2 += "\n"
// }
// console.log(res2)

// let n = 5; // you can take input from prompt or change the value
// let string = "";
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


// let z = ''
// for (let i=1; i<6; i++){
//   for (let j =0; j<4; j++){
//     z += `${i+j}`
//   }
//   z += '\n'
// }

// console.log(z)

// let message = 'I am a Happy Go lucky Guy';
// console.log(message.split()); // returns ["I am a Happy Go lucky Guy"]
// let arr =["I am a Happy Go lucky Guy"]
// let myarr =arr.toString().split('')
// console.log(myarr)

// let ser = []
// ser.push(myarr)
// console.log(ser)

// let jsa = ser.filter(item => item!=="a" || item !=="i" || item !== "u")

// // console.log(jsa)
// // let str = 'JavaScript String split()';
// // let substrings = str.split(' ');
// // let fin = substrings.filter(item => item !== "JavaScript")
// // console.log(fin)

// // console.log(substrings);

// let sd = "sekolahdasar"
// for (let i =0; i<sd.length; i++){
  
// }

let palindrome = (str) => {
  var lowRegStr = str.toLowerCase().replace(/[\W_]/g, '');
  var reverseStr = lowRegStr.split('').reverse();
  // console.log(reverseStr === lowRegStr);
  console.log(lowRegStr)
  console.log(reverseStr)
  let fine = reverseStr.filter(item => (item !== "a" && item !== "e"))
  console.log(fine)
  
}

palindrome("RaCe CaR")
