import entradaDados from 'readline-sync';

console.log("\n******Aplicação de Juros******"); 
let valor_juros;
let valor_divida = entradaDados.question("Informe o valor devido: R$ ");

if(valor_divida > 0) { //VALIDAÇÃO 1 - O valor da dívida deve ser maior que zero
    let dias_vencimento = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    if(dias_vencimento > 0) { //VALIDAÇÃO 2 - O número de dias deve ser maior que zero
        if(dias_vencimento > 15) { //LÓGICA - código para calcular o valor dos juros
            valor_juros = 10;
        }
        else { //LÓGICA - código para calcular o valor dos juros
            valor_juros = 5;
        }
        valor_divida = Number(valor_divida);
        dias_vencimento = Number(dias_vencimento);

        let total_juros = (valor_divida / 100) * valor_juros;
        let valor_total = valor_divida + total_juros;

        console.log("\nValor original da dívida: R$ "+valor_divida+",00");
        console.log("Dias atrasados: "+dias_vencimento);
        console.log("Taxa de Juros: "+valor_juros+"%");
        console.log("Valor total com juros: R$ "+valor_total.tofixed(2));
    }
    else { //VALIDAÇÃO 2 - se os dias de atraso forem <= que zero
        console.log("Você está em dia!");
    }
}
else { //VALIDAÇÃO - se o usuário deixar o campo vazio ou digitar um valor <= que zero
    console.log("O valor da dívida deve ser maior que zero!")
}