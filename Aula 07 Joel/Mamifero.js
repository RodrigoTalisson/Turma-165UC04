import { Animal } from "./Animal.js"

export class Mamifero extends Animal{
    #tipoPelo
    #habitat

    constructor(nome, idade, tipoPelo, habitat){
        super(nome,idade);
        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
    }

    get getTipoPelo(){
        return this.#tipoPelo
    }

    set setTipoPelo(tipoPelo){
        this.#tipoPelo = tipoPelo;
    }

    get gethabitat(){
        return this.#habitat
    }

    set sethabitat(habitat){
        this.#habitat = habitat;
    }
}