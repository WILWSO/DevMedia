//PROJETO PRATICO DE MANIPULAÇÃO DE STRINGS - CHUVAS E METEOROS
const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",               pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                  pico: "Abr 23",  velocidade: "18 km/s"},    
    { nome: "Eta Aquáridas",                pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",          pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",              pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = `=====* CHUVAS DE METEOROS - HEMISFERO SUL *=====`; //string
console.log(titulo.toUpperCase()); //exibe o título EM MAIÚSCULO
console.log("\n"); //exibe a linha de separação

for (const chuva of chuvas_meteoros) { //inicia o loop criando uma variável para o iterador, que irá percorrer todos os valores do array chuvas_meteoros
    let nome_chuva = chuva.nome; //atribui o valor da propriedade nome a variável nome
    let pico_chuva = chuva.pico; //atribui o valor da propriedade pico a variável pico
    let velocidade_chuva = chuva.velocidade; //atribui o valor da propriedade velocidade a variável velocidade
    
    //SPLIT transforma a string em um array
    let pico_mes_dia = pico_chuva.split(" "); //divide a string em um array de meses e dias, usando o espaço como separador
    let mes = pico_mes_dia[0]; //pega o primeiro elemento do array (mes)
    let dia = pico_mes_dia[1]; //pega o segundo elemento do array (dia)
    let pico_mes_nome = ""; //variável para armazenar o nome do mês

    switch(mes) { //verifica o mês
        case "Jan":
            pico_mes_nome = "Janeiro"; //se o mês for Jan, atribui Janeiro à variável pico_mes_nome
            break;
        case "Fev":
            pico_mes_nome = "Fevereiro"; //se o mês for Fev, atribui Fevereiro à variável pico_mes_nome
            break;
        case "Mar":
            pico_mes_nome = "Março"; //se o mês for Mar, atribui Março à variável pico_mes_nome
            break;
        case "Abr":
            pico_mes_nome = "Abril"; //se o mês for Abr, atribui Abril à variável pico_mes_nome
            break;
        case "Mai":
            pico_mes_nome = "Maio"; //se o mês for Mai, atribui Maio à variável pico_mes_nome
            break;
        case "Jun":
            pico_mes_nome = "Junho"; //se o mês for Jun, atribui Junho à variável pico_mes_nome
            break;
        case "Jul":
            pico_mes_nome = "Julho"; //se o mês for Jul, atribui Julho à variável pico_mes_nome
            break;
        case "Ago":
            pico_mes_nome = "Agosto"; //se o mês for Ago, atribui Agosto à variável pico_mes_nome
            break;
        case "Set":
            pico_mes_nome = "Setembro"; //se o mês for Set, atribui Setembro à variável pico_mes_nome
            break;
        case "Out":
            pico_mes_nome = "Outubro"; //se o mês for Out, atribui Outubro à variável pico_mes_nome
            break;
        case "Nov":
            pico_mes_nome = "Novembro"; //se o mês for Nov, atribui Novembro à variável pico_mes_nome
            break;
        case "Dez":
            pico_mes_nome = "Dezembro"; //se o mês for Dez, atribui Dezembro à variável pico_mes_nome
            break;
            default:
            pico_mes_nome = "Mês inválido"; //se o mês não for nenhum dos acima, atribui Mês inválido à variável pico_mes_nome
    }
    let pico_data_chuva_formatada = dia + " de " + pico_mes_nome; //formata a data da chuva de meteoros
    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilometros por segundo"); //substitui km/s e escreve por extenso    
    console.log("Nome: ".padEnd(30, ".") + nome_chuva); //exibe o nome da chuva de meteoros
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada); //exibe o pico da chuva de meteoros
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada); //exibe a velocidade da chuva de meteoros
    console.log("\n"); //exibe a linha de separação
    
} 