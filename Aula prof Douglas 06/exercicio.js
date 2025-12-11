

// let soma=0;

// for (let i=1 ;i<=10; i++){
// soma+=i;
// } console.log(soma)

//  for (let i=1 ;i<=20; i++){
//  if(i %2 === 0) console.log(i)
//  }


// let soma=0
// for (let i=1 ;i<=50; i++){
//     if(i %2 === 1) {
//         soma+=i
//     }
    
//     }console.log(soma)

// const frutas=['maça', 'banana', 'laranja']

// for(let i = 0; i<frutas.length; i++){
//     console.log(i, frutas[i])
// }


const num = ['10', '5', '8', '12'];

let total = 0;

for (let i = 0; i < num.length; i++) {
  total += Number(num[i]);
}

const media = total / num.length;

console.log(`O total é ${total} e sua média é ${media}`);
