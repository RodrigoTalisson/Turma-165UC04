export default class ContaBancaria{
    #saldo;
    #titular;
    #numero;
    #agencia;

    constructor
    (agencia, Numeroconta, titular, saldoInicial){
        this.#saldo = saldoInicial;
        this.#titular = titular;
        this.#numero = Numeroconta;
        this.#agencia = agencia;
        Object.freeze(this);
    }
    get getAgencia(){
        return this.#agencia
    }
    set setAgencia(agencia){
         this.#agencia=agencia;
    }
    get getNumero(){
        return this.#numero
    }
    set setNumero(numero){
         this.#numero=numero;
    }
    get getTitular(){
        return this.#titular
    }
    set setTitular(titular){
         this.#titular=titular;
    }
    get getSaldo(){
        return this.#saldo
    }
    set setSaldo(saldo){
         this.#saldo=saldo;
    }
    sacar(valor){
if(valor>0 && this.getSaldo >=valor){
this.#saldo -= valor;
}else if(valor<=0){
    console.log("Infelizmente não é possível sacar valores negativos ou zero")
}
else{
    console.log("Saldo Insuficiente")
}
    }
    depositar(valor){
        if(valor > 0){
             this.#saldo += valor;
        }else{
            console.log("Depósito inválido, não efetuado!")
        }
    }
}
