//separador de resultados
console.log("\n==============//FUNÇÕES NATIVAS DE ARRAY//===============\n");
//Essas funções nativas são chamadas de métodos de array

//EXEMPLO 1//
const diasDaSemana = [
    "domingo",
    "lunes", 
    "martes",
    "miercoles",
    "jueves",
    "viernes"
];
//separador de resultados
console.log("\n==============//Function.push//===============\n");
//******************************************//
diasDaSemana.push("sábado"); //PUSH serve para incluir um novo elemento no array
console.log(diasDaSemana);

//separador de resultados
console.log("\n==============//Function.map//===============\n");
//******************************************//
diasDaSemana.map((dia)=> console.log(dia)); //MAP percorre um array, SUBSTITUI o FOR e outros recursos de percorrer um array
console.log(diasDaSemana);

//separador de resultados
console.log("\n==============//Function.splice//===============\n");
//******************************************//
diasDaSemana.splice(2,1); //SPLICE remove elementos do array. Essa funcao recebe dois parametros: o primeiro indica a posicão inicial e o segundo a quantidade de elementos a serem eliminados 
console.log(diasDaSemana);

//separador de resultados
console.log("\n==============//Function.pop//===============\n");
//******************************************//
diasDaSemana.pop(); //POP remove o último elemento do array
console.log(diasDaSemana);

//separador de resultados
console.log("\n==============//Function.shift//===============\n");
//******************************************//
diasDaSemana.shift(); //SHIFT remove o primeiro elemento do array
console.log(diasDaSemana);


//separador de resultados
console.log("\n==============//Function.push//===============\n");
//******************************************//
//EXEMPLO 2//
const produto = {nome: "Notebook ideaPad cross X", preco: 2000, cor: "preto", marca: "Dell"};
const carrinho = [
    {nome: "Monitor LG 24 polegadas", preco: 800, cor: "preto", marca: "LG"},
    {nome: "Teclado mecânico", preco: 300, cor: "branco", marca: "Logitech"},
    {nome: "Mouse gamer", preco: 150, cor: "preto", marca: "Logitech"}
];
//iserir um novo produto no carrinho
carrinho.push(produto);
console.log(carrinho); //imprime o carrinho com o novo produto

//separador de resultados
console.log("\n==============//Function.splice//===============\n");
//******************************************//
//remover o Teclado Mecânico
carrinho.splice(1,1); //remove o teclado mecânico
console.log(carrinho); //imprime o carrinho sem o teclado mecânico

//Remove todos os elementos do carrinho
const totalElementos = carrinho.length; //pega o total de elementos do array
carrinho.splice(0, totalElementos); //remove todos os elementos do array
console.log(carrinho); //imprime o carrinho vazio

//outra forma de remover todos os elementos do array
carrinho.splice(0, carrinho.length); //remove todos os elementos do array
console.log(carrinho); //imprime o carrinho vazio

//*******FUNÇÃO.ForEach*********//
//O forEach() é uma função/método que percorre o array e executa para cada elemento.
//O forEach() não retorna nada, apenas executa a função para cada elemento do array.
//O forEach() não pode ser interrompido, ou seja, não é possível usar o break ou return dentro dele.

//separador de resultados
console.log("\n==============//Function.forEach//===============\n");
//******************************************//
//EXEMPLO 3//
const produtos = [
    {id: 1, nome: "Monitor LG 24 polegadas", preco: 800, cor: "preto", marca: "LG"},
    {id: 2, nome: "Teclado mecânico", preco: 300, cor: "branco", marca: "Logitech"},
    {id: 3, nome: "Mouse gamer", preco: 150, cor: "preto", marca: "Logitech"}
];

function imprimirProduto(pro) {
    console.log(pro.nome); //imprime o nome do produto
    console.log("Preço: " + pro.preco);
};
produtos.forEach(imprimirProduto); //imprime todos os produtos do array

//EXEMPLO 4//
//Além desse exemplo, ForEach tambpem pode passar outro parametro que é o índice do elemento
function imprimirProduto(pro, index) {
    let texto = index + "-";
    console.log(texto + '-'+ pro.nome); //imprime o nome do produto
    console.log("Preço: " + pro.preco);
};
produtos.forEach(imprimirProduto);

//separador de resultados
console.log("\n==============//Function.map//===============\n");
//******************************************//
//*******FUNÇÃO.MAP*********//
//O map() é uma função/método que percorre o array e executa para cada elemento.
//O map() retorna um novo array com os resultados da função aplicada a cada elemento.
//O map() pode ser interrompido, ou seja, é possível usar o break ou return dentro dele.
//O map() não altera o array original, ele cria um novo array com os resultados da função aplicada a cada elemento.
const alunos = [
    {id: 1, nome: "João", nota: 7},
    {id: 2, nome: "Maria", nota: 8},
    {id: 3, nome: "José", nota: 6},
    {id: 4, nome: "Ana", nota: 9},
    {id: 5, nome: "Pedro", nota: 5}
];
function alunoAprovado(aluno) {
    const aprovado = {
        nome: aluno.nome,
        nota: aluno.nota,
        aprovado: aluno.nota >= 7 //true se a nota for maior ou igual a 7
    };
    return aprovado; //retorna o aluno aprovado";
};
const alunosAprovados = alunos.map(alunoAprovado); //cria um novo array com os alunos aprovados
console.log(alunosAprovados); //imprime o array com os alunos aprovados

//separador de resultados
console.log("\n==============//Function.Map-Substring//===============\n");
//******************************************//
//***EXEMPLO DE MAP USANDO SUB-STRING***/
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  function abreviar(mes) {
    return mes.substr(0,3)
  }
  const mesesAbreviados = meses.map(abreviar);
  console.log(mesesAbreviados);

//separador de resultados
console.log("\n==============//Function.Filter//===============\n");
//******************************************//
//*******FUNÇÃO.FILTER*********//
//O filter() é uma função/método para selecionar apenas algus elementos do array. 
//O filter() retorna um novo array com os elementos que atendem a condição da função aplicada a cada elemento.
//O filter() pode ser interrompido, ou seja, é possível usar o break ou return dentro dele.

//UTILIZANDO O MESMO ARRAY DE ALUNOS DO EXEMPLO 4, AGORA VAMOS FILTRAR SOMENTE OS ALUNOS APROVADOS
const alunoAprovados = alunos.filter((aluno) => aluno.nota >= 7); //filtra os alunos aprovados
console.log(alunoAprovados); //imprime o array com os alunos aprovados

//outra forma de fazer o mesmo
function alunoAprovado(aluno) {
    return aluno.nota >= 7; //retorna true se a nota for maior ou igual a 7
}
const alunosAprovados1 = alunos.filter(alunoAprovado); //filtra os alunos aprovados
console.log(alunosAprovados1); //imprime o array com os alunos aprovados

//separador de resultados
console.log("\n==============//Function.Reduce//===============\n");
//******************************************//
//*******FUNÇÃO.REDUCE*********//
//O reduce() é uma função/método que reduz o array a um único valor.
//O reduce() recebe dois parâmetros: o primeiro é a função que será aplicada a cada elemento do array e o segundo é o valor inicial.
//O reduce() retorna um único valor, que pode ser um número, string, objeto, array, etc.
//O reduce() pode ser interrompido, ou seja, é possível usar o break ou return dentro dele.
//O reduce() altera o array original, ou seja, ele modifica o array original.
const jogos = [
  { id: 1, nome: 'Fifa 23', preco: 250 },
  { id: 2, nome: 'Call of Duty', preco: 300 },
  { id: 3, nome: 'God of War', preco: 350 },
];
const nomesJogos = jogos.reduce((acumulador, jogo) => {
  return acumulador + jogo.nome + ', '; //O primeiro parâmetro é a função que será aplicada a cada elemento do array e o segundo é o valor inicial (uma string vazia).|
}, ''); 
console.log(nomesJogos); //imprime os nomes dos jogos separados por vírgula
console.log(nomesJogos.slice(0, -2)); //remove a última vírgula e espaço da string

//Excemplo doo total de preços do carrinho de compras//
const itensCarrinho = [
  { id: 1, nome: 'Açucar', qnt: 2, valor: 2.00 },
  { id: 2, nome: 'Álcool 70', qnt: 3, valor: 9.95 },
  { id: 3, nome: 'Luvas descartáveis', qnt: 50, valor: 2.50 },
  { id: 4, nome: 'Papel toalha', qnt: 1, valor: 2.00 },
];
function somarValor (total, itemCarrinho) {
  const valorTotal = itemCarrinho.qnt * itemCarrinho.valor;
  return total + valorTotal;
}
const valorAPagar = itensCarrinho.reduce(somarValor, 0); //O primeiro parâmetro é a função que será aplicada a cada elemento do array e o segundo é o valor inicial (0).
//O reduce() percorre o array e aplica a função somarValor a cada elemento do array, retornando o valor total a pagar.
console.log(valorAPagar); //imprime o valor total a pagar

//separador de resultados
console.log("\n==============//Function.sort()//===============\n");
//******************************************//
//*******FUNÇÃO.SORT*********//
//O sort() é uma função/método que ordena os elementos do array.
const frutas = ["manzana", "banana", "laranja", "uva", "abacaxi", "kiwi", "avellana"];
const frutasOrdenadas = frutas.sort(); //ordena as frutas em ordem alfabética
console.log(frutasOrdenadas); //imprime as frutas ordenadas

//****ORDENAÇÃO DE NÚMEROS****/
const numeros = [5, 2, 8, 1, 4, 7, 6, 3];
const numerosOrdenados = numeros.sort((a, b) => a - b); //ordena os números em ordem crescente
console.log(numerosOrdenados); //imprime os números ordenados

//****ORDENAÇÃO DE OBJETOS****/
const alunos2 = [
  { id: 1, nome: 'João', nota: 7 },
  { id: 2, nome: 'Maria', nota: 8 },
  { id: 3, nome: 'José', nota: 6 },
  { id: 4, nome: 'Ana', nota: 9 },
  { id: 5, nome: 'Pedro', nota: 5 }
];
function ordenarPorNota(a, b) {
  if (a.nota < b.nota) {
    return -1; //retorna -1 se a nota do aluno a for menor que a nota do aluno b
  }
  if (a.nota > b.nota) {
    return 1; //retorna 1 se a nota do aluno a for maior que a nota do aluno b
  }
  return 0; //retorna 0 se as notas forem iguais
}
const alunosOrdenados = alunos2.sort(ordenarPorNota); //ordena os alunos por nota
console.log(alunosOrdenados); //imprime os alunos ordenados por nota

//separador de resultados
console.log("\n==============//Function.sort(ordem decrescente)//===============\n");
//******************************************//
//ORDENAÇÃO DE OBJETOS EM ORDEM DECRESCENTE//
const tabela = [
    {id: 1, equipe: "Time Azul", pontos: 10},
    {id: 2, equipe: "Time Verde", pontos: 20},
    {id: 3, equipe: "Time Vermelho", pontos: 15},
    {id: 4, equipe: "Time Amarelo", pontos: 25}
];
function melhorTime(a, b) {
    return b.pontos - a.pontos; //retorna a diferença entre os pontos do time b e do time a
}; 
tabela.sort(melhorTime); //ordena os times em ordem decrescente de pontos - Time com mais pontos primeiro
console.log(tabela); //imprime a tabela ordenada
