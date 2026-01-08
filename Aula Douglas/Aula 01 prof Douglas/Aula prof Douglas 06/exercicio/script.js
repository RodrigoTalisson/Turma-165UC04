
function mostrarTabuada() {
    const numero = Number(document.getElementById("number").value);
    const output = document.getElementById("output");

    if (!numero && numero !== 0) {
        output.innerHTML = "Digite um número válido!";
        return;
    }

    let mensagem = "";

    for (let i = 1; i <= 10; i++) {
        mensagem += `${numero} x ${i} = ${numero * i} <br>`;
    }

    output.innerHTML = mensagem;
}

function limparTabuada() {
    document.getElementById("number").value = "";
    document.getElementById("output").innerHTML = "Resultado";
}

