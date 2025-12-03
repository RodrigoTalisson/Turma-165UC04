// let consumo= 250;

// let valorTotal=0;

// if(consumo>=100){
//     valorTotal=consumo*0.50;
// }else if (consumo<=200){

//     valorTotal=(100*0.5)+((consumo-100)*0.75)
// }else{

//     valorTotal=(100*0.5)+(100*0.75)+(consumo-200)*1.80;
// }
// console.log('O valor da energia foi R$:' +valorTotal.toFixed(2))

let salario = 3500;
let imposto=0


if(salario<=2000){
   imposto=0
}else if (imposto<=3500){

    imposto=(salario-2000)*0.10;
}else if (salario<=5000){

    imposto=(1500*0.10)+((salario-3500)*0.30);
}
else {
    imposto=(1500*0.10)+(1500*0.20)+((salario-5000)*0.30);
}
alert('O valor do imposto foi R$:' + valorTotal.toFixed(2))