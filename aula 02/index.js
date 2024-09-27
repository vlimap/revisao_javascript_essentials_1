// Console.error para mostrar erros no console
console.error("Erro, esperava um valor 3");

// mostrar um alerta sobre algo
console.warn("Cuidado, url não existe");

// mostrar uma informação
console.info("Essa é uma informação!");

// mostrar no console em forma de tabela
let usuarios = [
    {nome:"fulano 2", cargo:"professor"},
    {nome:"fulano 1", cargo:"professor"}
]

console.table(usuarios)

// 
let x = 5
console.assert(x>10,"x não é maior que 10")// se falso

// Usado para determinar tempo de execução 
console.time("timer"); // tempo inicial 0.0000 ms
console.table(usuarios);
console.timeEnd("timer"); // tempo final 0.23123

// limpa o console 
//console.clear();

// Retorna a localização de um diretorio 
console.dir(document.location.port);
console.dir(document.location.hostname);
console.dir(document.location.pathname);
console.dir(document.location.protocol);

console.debug("Chegou até aqui");


let nome1 = "fulano"

// padrao escrevr os nomes das variaveis
let NOME = "fulano"; // upper case
let nome = "fulano"; // lower case
let nomeDoUsuario = "fulano"; // camelCase
let nome_do_usuario = "fulano"; //snack case
let NomeUsuario = "Olá 'fulano'" // Pascal case - react - react native
console.log(NomeUsuario)


