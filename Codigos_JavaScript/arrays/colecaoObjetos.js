//ACESSANDO UMA COLEÇÃO DE OBJETOS
//COLEÇÃO DE OBJETOS
let clientes_array = [
    { id: 1, nome: "Mônica", telefone: "99999-6565" },
    { id: 2, nome: "Tânia", telefone: "99999-0778" },
    { id: 3, nome: "Carlos", telefone: "99999-0551" }
];
console.log(clientes_array[1].nome); //Tânia - imprime o nome do cliente na posição 1
console.log(clientes_array[2].id); //3 - imprime o id do cliente na posição 2
console.log(clientes_array[0].telefone); //99999-6565 - imprime o telefone do cliente na posição 0

//así tambien se puede aceder a una propiedad de un objeto en um array
console.log(clientes_array[0]["nome"]) //Monica