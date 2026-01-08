import promptSync from "prompt-sync";
const prompt = promptSync();
import ContaBancaria from "./ContaBancaria.js";

function iniciarAplicacao(){

    console.clear(); //limpando os camandos anteriores do terminal
    console.log('Bem-vindo ao Banco JS! \n');
    const titular = prompt("Informe o nome do titular da conta: ");
    const agencia = parseInt(prompt("Informe o número da agência: "));
    const numeroConta = parseInt(prompt("Informe o número da conta: "));
    const saldoInicial = parseFloat(prompt("Informe o saldo inicial que deseja: "));
    const conta = new ContaBancaria(agencia,numeroConta,titular,saldoInicial);

    let opcao; // variável que auxiliará no controle do laço
    let valor = 0; //controlar saque e deposito
    
    do {
        mostrarMenu();
        opcao = parseInt(prompt("Opção: "));
        switch(opcao){
            case 1:
                console.log(`Saldo atual: ${conta.getSaldo}`);
                break;
            case 2:
                valor = parseFloat(prompt("Digite quanto deseja depositar na sua conta:"));
                conta.depositar(valor);
                break;
            case 3:
                valor = parseFloat(prompt("Digite quanto deseja sacar da sua conta:"));
                conta.sacar(valor);
                break;
            default:
                console.log("Opção inválida");
        }
    } while (opcao !==0);
    console.log("Obrigado por usar o Banco JS!");

}
function mostrarMenu(){
    console.log('\nEscolha uma opção:');
    console.log('1 - Ver Saldo');
    console.log('2 - Depositar');
    console.log('3 - Sacar');
    console.log('0 - Sair');
}

iniciarAplicacao();