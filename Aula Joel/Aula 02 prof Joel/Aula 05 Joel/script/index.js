import { SistemaAzar } from "./SistemaAzar.js";
import { Dado } from "./Dado.js";
import { Jogador } from "./Jogador.js";

const btn = document.getElementById("btnJogar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const palpite = Number(document.getElementById("palpite").value);

    if (!nome || palpite < 1 || palpite > 6) {
        resultado.innerHTML = "⚠️ Preencha corretamente os dados!";
        return;
    }

    const jogador = new Jogador(nome, palpite);
    const dado = new Dado();
    const sistema = new SistemaAzar(dado, jogador);

    resultado.innerHTML = sistema.verificarGanhador();
});
