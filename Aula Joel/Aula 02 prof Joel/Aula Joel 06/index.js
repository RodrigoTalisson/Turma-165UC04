import { Pessoa } from "./Pessoa.js";
import { Aluno } from "./Aluno.js";
import { Professor } from "./Professor.js";

//Exemplos de objeto Pessoa
let p1 = new Pessoa("Juvenal", "10/01/2001", "M");

console.log(p1.apresentar());
console.log(p1.calcularIdade());

//Exemplos de Objeto Aluno (2)
let a1 = new Aluno("Wesley","20/05/1856", "M", "FullStack", "a9585855");
let a2 = new Aluno("Geraldo","28/06/1993", "M", "FullStack", "a9585857");

console.log(a1.apresentar());
console.log(a1.calcularIdade());
console.log(a1.estudar());