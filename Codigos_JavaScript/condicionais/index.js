//=== ESTRURUAS CONDICIONAIS ===
//=== Condição if/else ===
    //=== Condição if/else tradicional ===
    //=== Condição if/else simplificada com if TERNÁRIO ===
    //=== Condição if/else simplificada com método CURTO-CIRCUITO ===
//=== Condição Switch ===
    //=== Condição Switch tradicional tipo textual ===
    //=== Condição Switch tradicional tipo numérico ===
    //=== Condição Switch tradicional tipo booleano ===
    //=== Condição Switch tradicional tipo array ===
    //=== Condição Switch tradicional tipo objeto ===

//=== Condição if/else tradicional ===
var idade = 17;
if(idade >= 16) {
    console.log("if tradicional: pode votar")}
    else {
        console.log("if tradicional: não pode votar")
};
    //=== Condição simplificada com if TERNÁRIO ===
    // ? representa o if e : representa o else
    var nota = 6;
    let estado = nota > 7 ? 'if ternário: Aprovado' : 'if ternário: Reprovado';
    console.log(estado); 

    //=== Condição simplificada com método CURTO-CIRCUITO ===
    //&& representa o if --> se a condição que vem antes for verdadeira executa o console.log, se for falsa nem continua
    let resultado = 'Curto-circuito 1: Reprovado'; 
    nota > 7 && (resultado = 'Aprovado: Curto-circuito');
    console.log(resultado);

    //=== 2º EXEMPLO com método CURTO-CIRCUITO ===
    const nome = 'Camila';
    nome.length > 0 && console.log("Curto-circuito 2: "+nome); //imprime nome se tiver pelo menos 1 caractere
    
    //=== 3º EXEMPLO com método CURTO-CIRCUITO ===
    //&& representa o if --> se a condição que vem antes for verdadeira executa o console.log, se for falsa nem continua
    const nomeValido = nome.length > 0; //se nome for vazio o console não será executado
    nomeValido && console.log("Curto-circuito 3: "+nome);
    

//=== Condição Switch ===
    //=== Condição Switch tradicional tipo textual exemplo 2 ===
    var produto = "Smartphone";
    switch(produto) {
        case "Smartphone": 
            console.log("Switch tradicional (tipo textual 1): "+produto)
            break;
        case "Tv": 
            console.log("Switch tradicional (tipo textual 1): "+produto)
            break;
        default: 
            console.log("Switch tradicional (tipo textual 1): Produto inválido");
            break;
    }

    //=== Condição Switch tradicional tipo textual exemplo 2 ===
    switch(produto) {
        case "Smartphone": 
        case "Celular":
        case "Telefone":
            console.log("Switch tradicional (tipo textual 2): "+produto)
            //será impresso o prodto se pelo menos uma das três cláusulas for atendida
            break;
        case "Tv": 
            console.log("Switch tradicional (tipo textual 2): "+produto)
            break;
        default: 
            console.log("Switch tradicional (tipo textual 2): Produto inválido");
            break;
    }

    //=== Condição Switch tradicional tipo textual exemplo 3 ===
    var mes = "Janeiro";
    switch(mes)
    {
        case "Janeiro":
        case "Fevereiro":
        case "Março":
            console.log("Switch tradicional (tipo textual 3): Verão");
            break;
        case "Abril":
        case "Maio":
        case "Junho":
            console.log("Switch tradicional (tipo textual 3): Outono");
            break;
        case "Julho":
        case "Agosto":
        case "Setembro":
            console.log("Switch tradicional (tipo textual 3): Inverno");
            break;
        case "Outubro":
        case "Novembro":
        case "Dezembro":
            console.log("Switch tradicional (tipo textual 3): Primavera");
            break;
        default:
            console.log("Switch tradicional (tipo textual 3): Mês inválido");
            break;
    }

    //=== Condição if/else if tradicional utilizando operadores lógicos ===
    let data_atual = new Date(); //pega a data atual do sistema
    let mes_atual = data_atual.getMonth(); //pega o mês atual do sistema (0 a 11)
    let ano_atual = data_atual.getFullYear(); //pega o ano atual do sistema (4 dígitos)
    let dia_atual = data_atual.getDate(); //pega o dia atual do sistema (1 a 31)
    console.log("if/else if tradicional: Data atual: "+dia_atual+"/"+(mes_atual+1)+"/"+ano_atual); //+1 porque o mês começa em 0 (Janeiro) e vai até 11 (Dezembro)
    
    if(mes_atual == 0 || mes_atual == 1 || mes_atual == 2) {
        console.log("if/else if tradicional: As chuvas de meteoros do primeiro trimestre são: \n\n"+mes_atual);
    }
    else if(mes_atual == 3 || mes_atual == 4 || mes_atual == 5) {
        console.log("if/else if tradicional: As chuvas de meteoros do segundo trimestre são: \n"+mes_atual);
    }
    else if(mes_atual == 6 || mes_atual == 7 || mes_atual == 8) {
        console.log("if/else if tradicional: As chuvas de meteoros do terceiro trimestre são: "+data_atual);
    }
    else if(mes_atual == 9 || mes_atual == 10 || mes_atual == 11) {
        console.log("if/else if tradicional: As chuvas de meteoros do quarto trimestre são: "+data_atual);
    }
    else {
        console.log("if/else if tradicional: Nenhuma chuva de meteoros no período informado");
    };