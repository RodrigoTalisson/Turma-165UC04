export class Pessoa {
    #nome;
    #dataNascimento;
    #genero;

    constructor(nome, dataNascimento, genero) {
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
        this.#genero = genero;
        Object.freeze(this);
    }
    get getNome() {
        return this.#nome;
    }
    set setNome(nome) {
        this.#nome = nome;
    }
    get getDataNascimento() {
        return this.#dataNascimento;
    }
    set setDataNascimento(dataNascimento) {
        this.#dataNascimento = dataNascimento;
    }
    get getGenero() {
        return this.#genero;
    }
    set setGenero(genero) {
        this.#genero = genero;
    }
    apresentar() {
        return `Olá meu nome é ${this.#nome}, nasci em ${this.#dataNascimento}`;
    }

    calcularIdade() {
        const ano = this.#dataNascimento.split('/')[2];
        const idade = new Date().getFullYear() - ano;    
        return `Minha idade atual é: ${idade} anos`;
    }
}