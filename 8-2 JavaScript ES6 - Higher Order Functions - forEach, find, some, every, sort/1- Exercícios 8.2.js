/* eslint-disable no-multiple-empty-lines */

    // PARA FIXAR (FOR EACH)

// 1- Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'renato@email.com',
];

// Resposta
let armazernarEmail = ''; 
const showEmailList = (email) => {
  if (email[0] === 'r') { 
  armazernarEmail += `O email ${email} esta cadastrado em nosso banco de dados!\n`; 
 }
};
emailListInData.forEach(showEmailList);
console.log(armazernarEmail);


// 2- Leia e entenda este exemplo do forEach feito no CodePen. https://codepen.io/pen/?template=LYZPEwV

/* ---------------------------------------------------------------------------------------- */

    // PARA FIXAR (FIND)

// 1- Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

// Resposta
console.log(numbers.find((param) => param % 3 === 0 && param % 5 === 0));


// 2- Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const nomes = ['João', 'Irene', 'Fernando', 'Maria'];

// Resposta
console.log(nomes.find((param) => param.length === 5));


// 3- Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

// Resposta
console.log(musicas.find((param) => param.id === '31031686'));
console.log(musicas.find((param) => {
 const arm = Object.values(param);
  return arm[0] === '31031686';
}));


/* ---------------------------------------------------------------------------------------- */

    // PARA FIXAR (SOME E EVERY)

// 1- Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// Resposta
const digitarNome = (param1) => { 
  const arm = names.some((param2) => param2 === param1); 
  return arm;
};
console.log(digitarNome('José'));


// 2- Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Resposta
const verifyAges = (array, idadeMinima) => array.every((param) => param.age >= idadeMinima);
console.log(verifyAges(people, 16));


/* ---------------------------------------------------------------------------------------- */

    // PARA FIXAR (SORT)

// 1- Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Resposta 
console.log(people2.sort((a, b) => (a.age > b.age ? 1 : -1)));


// 2- Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

// Resposta 
console.log(people2.sort((a, b) => (a.age < b.age ? 1 : -1)));


/* ---------------------------------------------------------------------------------------- */

/* Créditos

 Conteúdo: 
https://www.betrybe.com/

Repositório e Arquivos:
https://www.linkedin.com/in/ale-js/
https://github.com/alexandre-j-dev  */
