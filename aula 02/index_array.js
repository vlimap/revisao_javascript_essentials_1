// Concatenar e interpolar
let nome = "Valtemir";
let sobrenome = "Lima";
// concatenação
console.log(nome+sobrenome);

// interpolar 
console.log(`${nome} ${sobrenome}`);

// concantenação
console.log(nome,"",sobrenome);

const alunos = ["Fulano 1", "Fulano 2", "Fulano 3"];

// Adicionar elemento ao array
alunos.push("Fulano 4");

// Interpolar o array com texto 
console.log(`Nomes dos alunos: ${alunos.join(" | ")}`);// Fulano 1, Fulano 2, Fulano 3, Fulano 4

// Pop - ultimo elemento
let ultimo_valor = alunos.pop();

// imprimir o array
console.log(alunos.join(","));

// elemento excluido
console.log("Ultimo elemento excluido:",ultimo_valor);

// Shift - primeiro elemento
console.log(alunos.shift());

console.log(alunos.unshift("Fulano 5"));
// [Fulano 5, Fulano 2, Fulano 3]
// imprimir o array
console.log(alunos.join(","));

// concatenação de arrays
// novo array criado
let alunos_matriculados_recente = ["Beltrano 1", "Beltrano 2"];

// concatenando
let todos_alunos = alunos.concat(alunos_matriculados_recente);
// mostrando o novo array
console.log(todos_alunos.join(","));


// Slice - cópia de array
let tres_primeiros = todos_alunos.slice(0,3);
console.log(tres_primeiros.join(","));



