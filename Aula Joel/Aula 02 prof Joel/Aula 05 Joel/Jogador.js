export default class Jogador {
    #nome;
    #palpite;

    constructor(nome, palpite) {
        this.#nome = nome;
        this.#palpite = palpite;
        Object.freeze(this);
    }

    get getNome() {
        return this.#nome;
    }

    get getPalpite() {
        return this.#palpite;
    }
}
