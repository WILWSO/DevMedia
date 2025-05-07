// Separador de resultados
console.log("\n==============//LENGTH - TAMANHO DA STRING//===============\n");
// //EXEMPLO 1 - LENGTH - TAMANHO DA STRING
// //A propriedade length retorna o tamanho de uma string, ou seja, o número de caracteres que ela possui. A contagem é feita a partir do índice 0, ou seja, o primeiro caractere da string tem o índice 0, o segundo caractere tem o índice 1 e assim por diante.

let nome = "Wilton"; //string
let frase = nome+" é um programador excelente!"; //string
let tamanho_nome = nome.length; //tamanho da string nome
let tamanho_frase = frase.length; //tamanho da string frase
console.log(tamanho_nome); //exibe 6 - o tamanho da string nome
console.log(tamanho_frase); //exibe 34 - o tamanho da string frase


// separador de resultados  
console.log("\n==============//VALIDAÇÄO DE DADOS - EXEMPLO 2//===============\n");
// COMO USAR O LENGTH - EXEMPLO 2
//A propriedade length pode ser usada para verificar se uma string é vazia ou não. Uma string vazia tem tamanho 0, enquanto uma string não vazia tem tamanho maior que 0.
// SE USA muito para a validação de formulários, para verificar se o usuário preencheu todos os campos obrigatórios antes de enviar o formulário.

let pais = "Brasil"; //string
let cep = "77006-399"; //string

if (pais == "Brasil") { //se o país for Brasil
    if (cep.length == 9) { //se o tamanho do cep for 9
        console.log("CEP válido"); //exibe CEP válido
    } else { //se o tamanho do cep não for 9
        console.log("CEP inválido"); //exibe CEP inválido
    } //exibe CEP inválido
}