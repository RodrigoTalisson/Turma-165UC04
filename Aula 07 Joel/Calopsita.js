import { Ave } from "./Ave.js";

export class Calopsita extends Ave {
    #sonsAprendidos = [];

    constructor(nome, idade, tipoBico, capacidadeVoo) {
        super(nome, idade, tipoBico, capacidadeVoo);
    }

    aprenderSom(som) {
        if (!som || som.trim() === "") {
            console.log("O som não pode ser vazio.");
            return;
        }

        if (this.#sonsAprendidos.includes(som)) {
            console.log("A calopsita já aprendeu esse som.");
            return;
        }

        this.#sonsAprendidos.push(som);
        console.log(`A calopsita aprendeu o som: "${som}"`);
    }

    emitirSom() {
        if (this.#sonsAprendidos.length === 0) {
            console.log("A calopsita ainda não sabe imitar sons.");
        } else {
            console.log(
                `Calopsita imita: ${this.#sonsAprendidos.join(", ")}`
            );
        }
    }

    getInfo() {
        return `${super.getInfo()}, Sons aprendidos: ${
            this.#sonsAprendidos.length > 0
                ? this.#sonsAprendidos.join(", ")
                : "Nenhum"
        }`;
    }
}
