//separador de resultados
console.log("\n==============//SPLIT//===============\n");
//Split - A função split() é usada para dividir uma string em várias partes, com base em um separador especificado. A função retorna um array contendo as partes da string dividida. A função split() é útil quando você deseja separar uma string em várias partes, como quando você deseja dividir uma frase em palavras ou quando você deseja dividir uma lista de itens em um array.
//A função split() recebe um parâmetro, que é o separador que você deseja usar para dividir a string. O separador pode ser uma string ou uma expressão regular. Se o separador não for encontrado na string, a função retornará um array contendo a string original como o único elemento. Se o separador for uma string vazia, a função retornará um array contendo cada caractere da string como um elemento separado.
//A função split() é útil quando você deseja processar uma string em partes menores, como quando você deseja analisar uma lista de itens ou quando você deseja formatar uma string de uma maneira diferente. A função split() também pode ser usada para remover espaços em branco desnecessários de uma string, como quando você deseja dividir uma string em palavras e remover os espaços em branco entre elas.

let paises_string = "Brasil Argentina Chile Uruguai Peru Bolivia"; //string com os nomes dos países separados por espaços vazios
let paises_array = paises_string.split(" "); //divide a string em um array de países, usando o espaço como separador
console.log(paises_array); //exibe o array de países

//separador de resultados
console.log("\n==============//SPLIT//===============\n");
//EXEMPLO 2 - SPLIT - DIVIDINDO UMA STRING EM UM ARRAY
//Pegando só o primeiro nome do array

let nome_completo = "Wilton Santos de Oliveira"; //string com o nome completo
let nome_array = nome_completo.split(" "); //divide a string em um array de nomes, usando o espaço como separador
let primeiro_nome = nome_array[0]; //pega o primeiro nome do array
console.log(`Olá ${primeiro_nome}, seja bem vindo`); //exibe o primeiro nome do array