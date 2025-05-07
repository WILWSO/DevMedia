// separador de resultados
console.log("\n==============//SUBSTRING - EXEMPLO 1//===============\n");
//EXEMPLO 1 - SUBSTRING - EXTRAI UMA SUBSTRING DE UMA STRING
//A função substring() é usada para extrair uma parte de uma string, com base em dois índices: o índice inicial e o índice final. O índice inicial é incluído na substring, enquanto o índice final é excluído.
//O índice inicial é o primeiro caractere da substring e o índice final é o último caractere da substring. Se o índice final não for especificado, a substring será extraída até o final da string.
//A função substring() não altera a string original, mas retorna uma nova string com a substring extraída. Se o índice inicial for maior que o índice final, a função irá inverter os índices e extrair a substring corretamente.
//As strings sao representadas de três formas: aspas duplas "", aspas simples '' e acentos gravaes ´´ que sao chamados de TEMPLATE STRING.
//String, String Literal e String Objeto. A string é uma sequência de caracteres, que pode ser letras, números, símbolos ou espaços em branco. 
//A string literal é escrita entre aspas simples ou duplas. 
//A string objeto é um tipo de dado complexo que é criada usando o construtor String().
//A string objeto tem métodos e propriedades que podem ser usados para manipular a string.

//EXEMPLO 1
let frase = "Estou aprendendo JavaScript com a Alura!"; //string
let posicao_inicio = 16; //posição inicial
let posicao_fim = 27; //posição final
let palavra = frase.substring(posicao_inicio, posicao_fim); //extrai a substring da string
console.log(palavra); //exibe a substring 'JavaScript'

// separador de resultados
console.log("\n==============//SUBSTRING - EXEMPLO 2//===============\n");
//EXEMPLO 2
//A contagem dos índices começa em 0, ou seja, o primeiro caractere da string tem o índice 0, o segundo caractere tem o índice 1 e assim por diante.
//se indicar apenas o índice inicial, a substring será extraída até o final da string.

let resultado = frase.substring(7, 18); //extrai os caracteres da posição 7 até a posição 18 (não inclui a posição 18)
console.log(resultado); //exibe a substring 'aprendendo'

// separador de resultados
console.log("\n==============//SUBSTRING - EXEMPLO 3//===============\n");
//EXEMPLO 3
//É útil para limitar o número de caracteres exibidos em uma string, como quando você deseja exibir apenas os primeiros 10 caracteres de uma string longa.
//Imagine que queremos limitar a quantidade de caracteres que o usuário irá escrever em um campo de texto.

let conteudo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; //string longa
let tamanho = conteudo.length; //tamanho da string
let resumo = ""; //string vazia
    if (tamanho > 50) { //se o tamanho da string for maior que 50
        resumo = conteudo.substring(0, 50); //extrai os primeiros 50 caracteres da string
        resumo += "..."; //adiciona '...' ao final da string
     } else { //se o tamanho da string for menor que 50
        resumo = conteudo; //atribui a string original à variável resumo}
    }
    console.log(resumo); //exibe a string resumida