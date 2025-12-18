import PromptSync from "prompt-sync";
const prompt = PromptSync();
import ContaBancaria from "./ContaBancaria.js";

function iniciarAplicacao(){
    
console.clear();
console.log('Bem-vindo ao banco js\n')
const titular = prompt("Informe o nome titular da conta:");
const agencia = parseInt("Informe o numero da agencia:");
const numeroConta = parseInt("Informe o numero da conta:");
const saldoInicial = parseInt("Informe o saldo inicial da conta:")
const conta = new ContaBancaria(agencia, numeroConta, titular, saldoInicial);

let opcao; 
let valor = 0;

do{
mostrarMenu();
opcao = parent(prompt("Opção: "));
switch(opcao){
    case 1:
    console.log(`Saldo atual: ${conta.getSaldo}`)    
    break;
    case 2:
        valor=parseFloat(prompt("Digite quanto deseja sacar da sua conta:"));
        conta.sacar(valor);
        break;
        default:
            console.log("Opção Inválida")
}
}
while (opcao !==0);
console.log("Obrigado por usar o Banco js")
}
function mostrarMenu(){
    console.log('\nEscolha uma opção:')
    console.log('1- Ver Saldo')
    console.log('2- Depositar')
    console.log('3- Sacar')
    console.log('0- Sair')
}

iniciarAplicacao();