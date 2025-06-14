//separador de resultados
console.log("\n==============//FUNÇÕES//===============\n");
//Existem TRÊS formas de construir funcções em JavaScript.
//1. fUNÇÃO COMUM - funciona com {} chaves e a palavra "return"
//2. FUNÇÃO ANÔNIMA - não tem nome e não tem a palavra "return", mas sim a palavra "return" dentro de um console.log
//3. ARROW FUNCTION - não utiliza as chaves nem a palavra return, mas => a flechinha

//1. Função comum
function retorna_signo(signos) {
    return signos[0]["Nome"];
}    
//2. Função anônima
const retorna_signo = function (signos) {
    return signos[0]["Nome"];
};
//3. Arrow function
const retorna_signo = (signos) => {
    return signos[0]["Nome"];
};
    //3.1 Arrow function simplificada
    const retorna_signo = (signos) => signos[0]["Nome"];
    //3.2 Arrow function com destructuring
    const retorna_signo = ([{ Nome }]) => Nome;
    //3.3 Arrow function com destructuring e template string
    const retorna_signo = ([{ Nome }]) => `O signo é ${Nome}`;
    //3.4 Arrow function com destructuring e template string e retorno implícito e sem chaves e sem parênteses e sem colchetes e sem chaves e sem colchetes
    const retorna_signo = ({ Nome }) => `O signo é ${Nome}`;


//FUNCÃO QUE RETORNA O SIGNO DO DIA
let colecao_signos = [
    {"Nome": "Aquário", "DataInicio": "01-20","DataFim":"02-18"},
    {"Nome": "Peixes", "DataInicio": "02-19","DataFim":"03-20"},
    {"Nome": "Áries", "DataInicio": "03-21","DataFim":"04-19"},
    {"Nome": "Touro", "DataInicio": "04-20","DataFim":"05-20"},
    {"Nome": "Gêmeos", "DataInicio": "05-21","DataFim":"06-21"},
    {"Nome": "Câncer", "DataInicio": "06-22","DataFim":"07-23"},
    {"Nome": "Leão", "DataInicio": "07-24","DataFim":"08-22"},
    {"Nome": "Virgem", "DataInicio": "08-23","DataFim":"09-22"},
    {"Nome": "Libra", "DataInicio": "09-23","DataFim":"10-22"},
    {"Nome": "Escorpião", "DataInicio": "10-23","DataFim":"11-21"},
    {"Nome": "Sagitário", "DataInicio": "11-22","DataFim":"12-21"},
    {"Nome": "Capricórnio", "DataInicio": "12-22","DataFim":"01-19"}
];

const retorna_signo = (signos) => signos[0]["nome"];

console.log(retorna_signo(colecao_signos));