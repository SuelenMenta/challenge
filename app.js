alert ('Bem vindo ao nosso site!');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos'; 
alert(mensagemDeErro);
nome = prompt('Digite o seu nome');
idade = parseInt (prompt('Digite a sua idade'));
if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
} else {
    alert('Você não pode tirar CNH! Vai de bike!');
} 