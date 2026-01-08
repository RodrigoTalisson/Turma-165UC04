import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

export class SistemaAzar {
    #dado;
    #jogador;

    constructor(dado, jogador) {
        if (!(dado instanceof Dado)) {
            throw new Error("dado precisa ser uma instância de Dado");
        }

        if (!(jogador instanceof Jogador)) {
            throw new Error("jogador precisa ser uma instância de Jogador");
        }

        this.#dado = dado;
        this.#jogador = jogador;
    }

    set setDado(dado) {
        if (dado instanceof Dado) {
            this.#dado = dado;
        }
    }

    get getDado() {
        return this.#dado;
    }

    set setJogador(jogador) {
        if (jogador instanceof Jogador) {
            this.#jogador = jogador;
        }
    }

    get getJogador() {
        return this.#jogador;
    }

    verificarGanhador() {
        if (this.#dado.getFace === this.#jogador.getPalpite) {
            console.log(`Parabéns ${this.#jogador.getNome}, você ganhou!!!!!!!!!!!!!!!`);
            console.log(`Seu palpite foi: ${this.#jogador.getPalpite}`);
            console.log(`A face do seu dado foi: ${this.#dado.getFace}`);
        } else {
            console.log(`${this.#jogador.getNome}, vc perdeu`);
            console.log(`Seu palpite foi: ${this.#jogador.getPalpite}`);
            console.log(`A face do seu dado foi: ${this.#dado.getFace}`);
        }
    }
}
