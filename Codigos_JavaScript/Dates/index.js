//PRIMEIROS PASSOS COM DATAS
//separador de resultados
console.log("\n==============//DATAS - PRIMEIROS PASSOS//===============\n");

const dataAtual = new Date(); //cria um objeto de data com a data e hora atuais
console.log(dataAtual); //exibe a data atual
console.log(dataAtual.getDate()); //exibe o dia do mês atual
console.log(dataAtual.getMonth() + 1); //exibe o mês atual (0-11, por isso soma 1)
console.log(dataAtual.getFullYear()); //exibe o ano atual
console.log(dataAtual.getHours()); //exibe a hora atual (0-23)
console.log(dataAtual.getMinutes()); //exibe os minutos atuais (0-59)
console.log(dataAtual.getSeconds()); //exibe os segundos atuais (0-59)
console.log(dataAtual.getMilliseconds()); //exibe os milissegundos atuais (0-999)
console.log(dataAtual.getTime()); //exibe o timestamp atual (número de milissegundos desde 1 de janeiro de 1970)
console.log(dataAtual.getTimezoneOffset()); //exibe o fuso horário atual (em minutos)
console.log(dataAtual.toString()); //exibe a data atual como uma string
console.log(dataAtual.toLocaleString()); //exibe a data atual como uma string formatada de acordo com o fuso horário local


//parametro de data
// Sem parâmetro: Data atual
const hoje= new Date();

// Com parâmetro: String com a data
const exemplo1 = new Date(  "2020-02-28"  );
const exemplo2 = new Date(  "2020-02-27 10:35:00"  );

//  Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(  2020, 2, 28, 13, 20, 2, 15  );


// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );

// Imprimindo timestamp
console.log( hoje.valueOf() );

const dataPostagem = new Date('2020-11-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// Exibindo a diferença
console.log(horas);