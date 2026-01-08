export class Jogador{
    #nome;
    #palpite;

    constructor(nome, palpite){
        this.#nome = nome;
        this.#palpite = palpite;
        Object.freeze(this); 
    }
    set setNome(nome){
        this.#nome = nome;
    }
    get getNome(){
        return this.#nome;
    }
    set setPalpite(palpite){
        this.#palpite = palpite;
    }
    get getPalpite(){
        return this.#palpite;
    }


}