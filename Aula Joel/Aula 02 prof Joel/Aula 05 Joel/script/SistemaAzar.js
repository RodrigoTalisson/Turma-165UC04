import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

export class SistemaAzar {
    #dado;
    #jogador;

    constructor(dado, jogador) {
        if (dado instanceof Dado && jogador instanceof Jogador) {
            this.#dado = dado;
            this.#jogador = jogador;
        }
        Object.freeze(this);
    }

    set setDado(dado){
        this.#dado = dado
    }
    get getDado(){
        return this.#dado;
    }
    set setJogador(jogador){
        this.#jogador = jogador;
    }
    get getJogador(){
        return this.#jogador;
    }

    verificarGanhador() {
        if (this.#dado.getFace === this.#jogador.getPalpite) {
            return `
            🎉 Parabéns ${this.#jogador.getNome}!<br>
            Você ganhou!<br>
            Palpite: ${this.#jogador.getPalpite}<br>
            Dado: ${this.#dado.getFace}
            `;
        } else {
            return `
            ❌ ${this.#jogador.getNome}, você perdeu.<br>
            Palpite: ${this.#jogador.getPalpite}<br>
            Dado: ${this.#dado.getFace}
            `;
        }
    }
}    