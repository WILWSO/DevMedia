// separador de resultados
console.log("\n==============//PADSTART E PADEND//===============\n");
// //EXEMPLO 1 - PADSTART - ADICIONA CARACTERES NO INÍCIO DA STRING
// //A função padStart() é usada para adicionar caracteres no início de uma string até que ela atinja um determinado comprimento. A função não altera a string original, mas retorna uma nova string com os caracteres adicionados. A função padStart() é útil quando você deseja formatar uma string para que ela tenha um comprimento fixo, como quando você deseja exibir números com zeros à esquerda ou quando você deseja alinhar texto em uma tabela.
// //A função padStart() recebe dois parâmetros: o comprimento desejado da string e o caractere que você deseja adicionar no início da string. Se o comprimento desejado for menor que o comprimento atual da string, a função não fará nada e retornará a string original. Se o comprimento desejado for maior que o comprimento atual da string, a função adicionará os caracteres no início da string até que ela atinja o comprimento desejado.
// IMNPORTANTE PARA RELATÓRIOS E TABELAS

let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);
console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

// // separador de resultados
console.log("\n==============//PADEND - EXEMPLO 2//===============\n");
// //EXEMPLO 2 - PADEND - ADICIONA CARACTERES NO FIM DA STRING

let label = "Email: ";
let email = "contato@email.com";

console.log( label.padEnd(20, ' ') + email );

// // separador de resultados
console.log("\n==============//PADEND - EXEMPLO 3//===============\n");
// //EXEMPLO 3 - PADEND - ADICIONA CARACTERES NO FIM DA STRING

let label_nome = "Nome: ";
let valor_nome = "Edmilson";
let label_telefone = "Telefone: ";
let valor_telefone = "62 9 9999-9999";
let label_cidade = "Cidade: ";
let valor_cidade = "Goiânia";

console.log(label_nome.padEnd(25, ".") + valor_nome);
console.log(label_telefone.padEnd(25, ".") + valor_telefone);  
console.log(label_cidade.padEnd(25, ".") + valor_cidade);