let pessoas = {
  joao: {
    nome: "joão",
    email: "joao@email.com",
    idade: 37,
  },
  maria: {
    nome: "maria",
    email: "maria@email.com",
    idade: 38,
  },
  pedro: {
    nome: "pedro",
    email: "pedro@email.com",
    idade: 54,
  },
};

console.log(pessoas) // imprimindo
console.log(Object.keys(pessoas));
console.log(Object.values(pessoas.joao));

// operadores:
// Aritmeticos ( +, -,* , /, %, **)
// Lógicos ( && , || , !) )
// Relacionais( < , >, <=, >=, ==, !==, ===)

let a = 10, b = 3, c = 5;

// Aritmeticos ( +, -,* , /, %, **)
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) // 10 % 3 == 10/3 = 3 resto 1 
console.log(a ** b) // A = p(1+r)²

// Lógicos ( && , || , !) )
let aceite_termo_1 = true; // marcado
let aceite_termo_2 = false; // não marcado

console.log(aceite_termo_1 && aceite_termo_2) 
console.log(aceite_termo_1 || aceite_termo_2) 
console.log(aceite_termo_1) 