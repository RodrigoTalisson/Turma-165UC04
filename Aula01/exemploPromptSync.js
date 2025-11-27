import PromptSync from "prompt-sync";
const prompt= PromptSync();

const nome = prompt('Digite seu nome');
console.log('Olá ${nome} o back começou');


const idade = Number(prompt('Digite sua idade'));
console.log('${idade+10}'); 













