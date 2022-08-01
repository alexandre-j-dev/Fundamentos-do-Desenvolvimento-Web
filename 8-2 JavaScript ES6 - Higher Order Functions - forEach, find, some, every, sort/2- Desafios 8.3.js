/* eslint-disable no-multiple-empty-lines */

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

// 1- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const resposta1 = books.find((param) => (param.author.birthYear === 1947)).author.name;
console.log(`Autor nascido em 1947 é ${resposta1}`);


// 2- Retorne o nome do livro de menor nome.

let result = ''; // var foreach
let maxLength = 99; // var foreach

const longestWord = (param) => {
    if (param.name.length < maxLength) {
        maxLength = param.name.length;
        result = param.name;
    }
};

books.forEach(longestWord);
console.log(`O livro com menor nome é ${result}`); // log var foreach


// 3- Encontre o primeiro livro cujo nome possui 26 caracteres.

const encontrarLivro = (param) => param.name.length === 26;
const resposta3 = books.find(encontrarLivro).name;
console.log(`O livro com 26 caracteres é ${resposta3}`);


// 4- Ordene os livros por data de lançamento em ordem decrescente.
console.log('Ordem decrescente é:');
console.log(books.sort((a, b) => (a.releaseYear < b.releaseYear ? 1 : -1)));


// 5- Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const todasem1901 = (param) => param.author.birthYear > 1901 && param.author.birthYear < 2000;
const resposta5 = books.every(todasem1901);
console.log(`Todos nasceram no seculo XX? é ${resposta5}`);


// 6- Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

const decada80 = (param) => param.releaseYear > 1980 && param.releaseYear < 1990;
const resposta6 = books.some(decada80);
console.log(`Algum livro foi lançado entre 80 e 90? é ${resposta6}`);


// 7- Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());


/* Créditos

 Conteúdo: 
https://www.betrybe.com/

Repositório e Arquivos:
https://www.linkedin.com/in/ale-js/
https://github.com/alexandre-j-dev  */