import { Cadela } from "./Cadela.js";
import { Calopsita } from "./Calopsita.js";

const cadela = new Cadela("SolLuna", 1, "Curto", "Doméstico");
const calopsita = new Calopsita("Lola", 3, "Curvo", "48km/dia");

cadela.emitirSom();
console.log(cadela.getInfo());

cadela.adestrar();
console.log(cadela.getInfo());

console.log("---------------");

calopsita.emitirSom();
calopsita.aprenderSom("Piu piu");
calopsita.aprenderSom("Olá");
calopsita.emitirSom();

console.log(calopsita.getInfo());

