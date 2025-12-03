// let numero1=Number(prompt("Digite um número"))
// let numero2=Number(prompt("Digite outro número"))


// if(numero1 <=10 && numero2<=10 && numero1>=0 && numero2>=0){
// let media= (numero1+numero2)/2

// if(media>4 && numero1>0 && numero2>0){
//     alert(`Sua nota foi ${media}  ` +'Aprovado')

// }else if (media <=3){
//     alert(`Sua nota foi ${media}` +'Reprovado')
// }
// else if (media <=4 && numero1!=0 && numero2!=0){
//     alert(`Sua nota foi ${media}` +'Recuperaçao')
// }
// else(
//     alert('Digite um numero valido')
// )
// }






let peso =Number(prompt("Digite seu peso "));

let altura =Number(prompt("Digite sua altura"));

let imc= peso/(altura*altura)


if(imc <18.5){

    alert('Abaixo do peso')
}
else if(imc >=18.5 && imc<=24.9){

    alert('Normal')
}
else if(imc >=25 && imc<=29.9){

    alert('Sobrepeso')

}else if(imc >=30){

alert('Obesidade')

}