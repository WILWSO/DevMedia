//separador de resultados
console.log("\n==============//TEMPLATE STRING//===============\n");
// TEMPLATE STRING -
//A template strings possui vantagens com relação as strings comuns, como: pode conter um texto com mais de uma linha, pode conter expressões e variáveis, e pode ser usada para criar strings formatadas.
//A template strings é criada usando acentos graves (``) e pode conter expressões e variáveis dentro de ${}.
//A template strings é uma forma mais moderna de criar strings e é recomendada para uso em projetos novos.
//Template String é uma forma de criar strings em JavaScript que permite incluir expressões dentro da string, usando a sintaxe ${expressao}. Isso torna mais fácil criar strings dinâmicas e formatadas, sem precisar usar o operador de concatenação (+) ou a função String().
//Template String também permite criar strings multilinha, sem precisar usar o caractere de escape (\n) para quebrar a linha. Isso torna o código mais legível e fácil de entender.

//EXEMPLO 1 
let nome = "Wilton"; //string
let tecnologia = "JavaScript"; //string
let curso = "DevMedia"; //string
let mensagem = `Olá, meu nome é ${nome}, 
estou aprendendo ${tecnologia} 
com a ${curso}.`; //template string
console.log(mensagem); //exibe a mensagem formatada

// separador de resultados
console.log("\n==============//SELECIONANDO STRING - EXEMPLO 3//===============\n");
//EXEMPLO 2 

let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}