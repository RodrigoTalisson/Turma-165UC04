export default class Usuario {
    nome;
    idade;
    genero;
    telefone;
    email;
    cpf;
    cep;
    rg;
    endereco;

    constructor(nome, idade, genero, telefone, email, cpf, cep, rg, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
        this.cep = cep;
        this.rg = rg;
        this.endereco = endereco;
    }
    mostrarDados(){
        return`
        Nome: ${this.nome}
          Idade: ${this.idade}
            Genero: ${this.genero}
              Telefone: ${this.telefone}
                Nome: ${this.nome}
                  Nome: ${this.nome}
                    Nome: ${this.nome}
                      Nome: ${this.nome}

        `
    }
}
