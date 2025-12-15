function calcularIdade() {
    const inputAno = document.getElementById("anoNascimento").value;
    const resultado = document.getElementById("resultado");
  
    // Verifica se tem exatamente 4 números
    if (inputAno.length !== 4 || isNaN(inputAno)) {
      resultado.innerText = "⚠️ Digite um ano válido com 4 números.";
      return;
    }
  
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - inputAno;
  
    // Verifica se o ano é válido
    if (idade < 0 || idade > 120) {
      resultado.innerText = "⚠️ Ano de nascimento inválido.";
      return;
    }
  
    resultado.innerText = `Você tem ${idade} anos.`;
  }
  