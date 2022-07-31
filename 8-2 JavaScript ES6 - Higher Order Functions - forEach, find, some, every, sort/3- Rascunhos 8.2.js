const obj = [
    {    
          id: 6,
          name: 'O Chamado de Cthulhuo',
          genre: 'Terror',
          author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
          },
          releaseYear: 1928,      
   },
   {    
    id: 6,
    name: 'O Chamado de Cthulhuoxxxxxxx',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
  ];
  let arm1 = '';
  let arm2 = '';
  console.log(obj.forEach((param) => { arm1 += obj.genre; arm2 += param.name; }));
 console.log(arm1);
 console.log(arm2);
/* Créditos

 Conteúdo: 
https://www.betrybe.com/

Repositório e Arquivos:
https://www.linkedin.com/in/ale-js/
https://github.com/alexandre-j-dev  */