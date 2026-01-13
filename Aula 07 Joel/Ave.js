import { Animal } from "./Animal.js"

export class Ave extends Animal{
    #tipoBico
    #capacidadeVoo

    constructor(nome, idade, tipoBico, capacidadeVoo){
        super(nome,idade);
        this.#tipoBico = tipoBico;
        this.#capacidadeVoo = capacidadeVoo;
    }

    get getTipoBico(){
        return this.#tipoBico
    }

    set setTipoBico(tipoBico){
        this.#tipoBico = tipoBico;
    }

    get getCapacidadeVoo(){
        return this.#capacidadeVoo
    }

    set setCapacidade(capacidadeVoo){
        this.#capacidadeVoo = capacidadeVoo;
    }
}