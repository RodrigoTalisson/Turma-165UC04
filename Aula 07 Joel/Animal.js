export class Animal {
    #nome;
    #idade;

    constructor(nome, idade){
        this.#nome = nome;
        this.#idade = idade;

        Object.freeze(this);
    }

    get getNome(){
        return this.#nome;
    }

    set setNome(nome){
        this.#nome = nome;
    }

    get getIdade(){
        return this.#idade;
    }

    set setIdade(idade){
        this.#idade = idade
    }

    emitirSom(){
        console.log('O animal emite um som')
    }

    getInfo(){
        return `Nome: ${this.getNome}, Idade: ${this.getIdade}`
    }
}