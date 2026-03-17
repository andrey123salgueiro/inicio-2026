const usuarios = [ // const cria uma variavel que armazena uma lista
    { nome: "Carlos", idade: 32}, // dentro do array temos dois objetos com as propriedades nome e idade
    { nome: "Ana", idade: 28},
    { nome: "Felipe", idade: 40}
];

// Encontrando um objeto - o 'find' vai buscar o resultado - === busca exatamente igual
const ana = usuarios.find(usuario => usuario.nome === "Ana");
console.log(ana);

//filtrando o objeto
const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);
console.log(usuariosAcimaDe30);

// ordenando os objetos por idade
const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuariosOrdenadosPorIdade); 

// ordenando os objetos por idade
const usuariosOrdenadosPorIdades = usuarios.sort((a, b) => b.idade - a.idade);
console.log(usuariosOrdenadosPorIdade); 
