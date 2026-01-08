export default class ContaBancaria {
    #saldo;
    #titular;
    #numero;
    #agencia;
    constructor(agencia, numeroConta, titular, saldoInicial) {
        this.#saldo = saldoInicial;
        this.#titular = titular;
        this.#numero = numeroConta;
        this.#agencia = agencia;
        Object.freeze(this);
    }
    get getAgencia() {
        return this.#agencia
    }
    set setAgencia(agencia) {
        this.#agencia = agencia;
    }
    get getNumero() {
        return this.#numero;
    }
    setNumero(numeroConta) {
        this.#numero = numeroConta;
    }
    get getTitular() {
        return this.#titular;
    }
    set setTitular(titular) {
        this.#titular = titular;
    }
    get getSaldo(){
        return this.#saldo;
    }
    setSaldo(saldo){
        this.#saldo = saldo;
    }

    sacar(valor){
        if(valor>0 && this.getSaldo >=valor){
            this.#saldo -= valor;
        }else if(valor<=0){
            console.log("Não é possível sacar valores menores ou igual a zero.");
        }else{
            console.log("Saldo insuficiente!");
        }
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
        }else{
            console.log("Depósito inválido, não efetuado!");
        }
    }

}
