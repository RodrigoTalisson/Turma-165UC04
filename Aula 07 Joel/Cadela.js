import { Mamifero } from "./Mamifero.js";

export class Cadela extends Mamifero {
    #adestrada;

    constructor(nome, idade, tipoPelo, habitat, adestrada = false) {
        super(nome, idade, tipoPelo, habitat);
        this.#adestrada = adestrada;
    }

    adestrar() {
        this.#adestrada = true;
        console.log(`${this.getNome} foi adestrada com sucesso!`);
    }

    emitirSom() {
        console.log("A cadela late: Au au!");
    }

    getInfo() {
        return `${super.getInfo()}, Adestrada: ${
            this.#adestrada ? "Sim" : "Não"
        }`;
    }
}
