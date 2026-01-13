import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa{ //implementando herança

    #matricula;
    #curso;

    constructor(nome, dataNascimento, genero, curso, matricula){
        super(nome, dataNascimento, genero); //passando os dados para o contrutor da super classe
        this.#matricula = matricula;
        this.#curso = curso;
        Object.freeze(this);
    }
    get getMatricula(){
        return this.#matricula;
    }
    set setMatricula(matricula){
        this.#matricula = matricula;
    }
    get getCurso(){
        return this.#curso;
    }
    set setCurso(curso){
        this.#curso = curso;
    }
    estudar(){
        return `${this.getNome} está estudando no curso de ${this.#curso} `;
    }

    apresentar(){
        return `Olá meu nome é ${this.getNome}, nasci em ${this.getDataNascimento
        }, ${this.calcularIdade()}, estou cursando ${this.#curso}.`;
    }


}