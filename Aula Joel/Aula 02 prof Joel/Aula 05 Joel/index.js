import { SistemaAzar } from "./SistemaAzar.js";
import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

let jogador01 = new Jogador("Rodrigo", 3); // 1 a 6
let dado = new Dado();

let sistema = new SistemaAzar(dado, jogador01);

sistema.verificarGanhador();
