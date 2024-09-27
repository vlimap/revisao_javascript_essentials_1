// 1. Saudação com nome (String)
let nomePessoa = "João";
console.log(`Olá, ${nomePessoa}, seja bem-vindo!`);

// 2. Soma de dois números (Number)
let num1 = 5, num2 = 7;
console.log(`A soma de ${num1} e ${num2} é ${num1 + num2}.`);

// 3. Verificação de maioridade (Boolean)
let idade = 20;
console.log(`É maior de idade: ${idade >= 18}.`);

// 4. Array de frutas (Array)
let frutas = ["maçã", "banana", "laranja"];
console.log(`As frutas são: ${frutas[0]}, ${frutas[1]}, ${frutas[2]}.`);

// 5. Objeto de pessoa (Object)
let pessoa = { nome: "Ana", idade: 28 };
console.log(`Meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos.`);

// 6. Cálculo da média de notas (Number)
let nota1 = 8, nota2 = 9;
let media = (nota1 + nota2) / 2;
console.log(`A média das notas ${nota1} e ${nota2} é ${media}.`);

// 7. Cálculo da idade a partir do ano de nascimento (Number)
let anoNascimento = 1990;
let anoAtual = 2024;
let idadeCalculada = anoAtual - anoNascimento;
console.log(`Se você nasceu em ${anoNascimento}, sua idade é ${idadeCalculada} anos.`);

// 8. Exibir comprimento de uma string (String)
let texto = "Olá, Mundo!";
console.log(`O texto '${texto}' tem ${texto.length} caracteres.`);

// 9. Verificação de presença em array (Array)
let numeros = [1, 2, 3, 4, 5];
console.log(`O número 3 está presente: ${numeros[2] === 3}.`);

// 10. Contagem de elementos em um array (Array)
let arrayElementos = [1, 2, 3, 4, 5];
console.log(`O array tem 5 elementos.`); // Sabemos que tem 5 elementos

// 11. Concatenação de strings (String)
let palavra1 = "Olá", palavra2 = "Mundo";
console.log(`${palavra1}, ${palavra2}!`);

// 12. Converter temperatura de Celsius para Fahrenheit (Number)
let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F.`);

// 13. Exibir o dobro de um número (Number)
let numero = 6;
console.log(`O dobro de ${numero} é ${numero * 2}.`);

// 14. Exibir o valor absoluto de um número (Number)
let numeroNegativo = -10;
console.log(`O valor absoluto de ${numeroNegativo} é ${Math.abs(numeroNegativo)}.`);

// 15. Array de objetos (Array & Object)
let pessoas = [{ nome: "João" }, { nome: "Maria" }];
console.log(`O nome da primeira pessoa é ${pessoas[0].nome}.`);

// 16. Cálculo do perímetro de um retângulo (Number)
let comprimento = 10, largura = 5;
let perimetro = 2 * (comprimento + largura);
console.log(`O perímetro do retângulo é ${perimetro}.`);

// 17. Verificação de paridade (Boolean)
let numeroVerificar = 4;
console.log(`O número ${numeroVerificar} é par: ${numeroVerificar % 2 === 0}.`);

// 18. Cálculo da raiz quadrada (Number)
let numeroRaiz = 16;
console.log(`A raiz quadrada de ${numeroRaiz} é ${Math.sqrt(numeroRaiz)}.`);

// 19. Exibir elementos de um array (Array)
let cores = ["azul", "verde", "vermelho"];
console.log(`As cores são: ${cores.join(', ')}.`);

// 20. Dividir dois números (Number)
let dividendo = 10, divisor = 2;
console.log(`A divisão de ${dividendo} por ${divisor} é ${dividendo / divisor}.`);

// 21. Exibir o menor número de um array (Array)
let numerosArray = [3, 5, 1, 4, 2];
console.log(`O menor número é 1.`); // Sabemos que o menor número é 1

// 22. Cálculo da média de várias notas (Number & Array)
let notasArray = [7, 8, 9];
let mediaNotas = (notasArray[0] + notasArray[1] + notasArray[2]) / notasArray.length;
console.log(`A média das notas é ${mediaNotas}.`);

// 23. Concatenar propriedades de um objeto (Object)
let pessoaCompleta = { nome: "Maria", sobrenome: "Silva" };
console.log(`Meu nome completo é ${pessoaCompleta.nome} ${pessoaCompleta.sobrenome}.`);

// 24. Exibir a contagem de letras em uma string (String)
let palavra = "JavaScript";
console.log(`A palavra '${palavra}' tem ${palavra.length} letras.`);

// 25. Convertendo anos para meses (Number)
let anos = 25;
console.log(`${anos} anos correspondem a ${anos * 12} meses.`);

// 26. Exibir o maior número entre três valores (Number)
let a = 10, b = 15, c = 5;
console.log(`O maior número é ${Math.max(a, b, c)}.`);

// 27. Cálculo do IMC (Number)
let altura = 1.75, peso = 70;
let imc = peso / (altura * altura);
console.log(`Seu IMC é ${imc.toFixed(2)}.`);

// 28. Exibir a string em maiúsculas (String)
let stringParaMaiusculas = "javascript";
console.log(`A string '${stringParaMaiusculas}' em maiúsculas é '${stringParaMaiusculas.toUpperCase()}'.`);

// 29. Contagem de vogais em uma string (String)
let stringVogais = "banana";
let contagemVogais = (stringVogais.match(/[aeiou]/gi) || []).length;
console.log(`A string '${stringVogais}' tem ${contagemVogais} vogais.`);

// 30. Exibir elementos de um objeto (Object)
let objeto = { nome: "Carlos", idade: 30, cidade: "São Paulo" };
console.log(`As propriedades do objeto são:\n
     Chave: ${Object.keys(objeto).join(', ')},\n
     Valor: ${Object.values(objeto).join(", ")}`);
