import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {
    #matricula;
    #disciplina;

    constructor(nome, dataNascimento, genero, disciplina, matricula) {
        super(nome, dataNascimento, genero); //passando os dados para o contrutor da super classe
        this.#matricula = matricula;
        this.#disciplina = disciplina;
        Object.freeze(this);
    }
    get getMatricula() {
        return this.#matricula;
    }
    set setMatricula(matricula) {
        this.#matricula = matricula;
    }
    get getDisciplina() {
        return this.#disciplina;
    }
    set setDisciplina(disciplina) {
        this.#disciplina = disciplina;
    }
    ensinar() {
        return ` ${this.getNome} está ensinando a disciplina: ${this.#disciplina} `;
    }
}