//separador de resultados
console.log("\n==============//DO .. WHILE//===============\n");
   
    //DO .. WHILE - Estruturas de repetição
    //Enquanto a condição for verdadeira, o loop será executado.
    //A diferença é que o DO .. WHILE executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa.
    //O WHILE executa o bloco de código apenas se a condição for verdadeira.  
    //PERCORRENDO COLEÇÃO DE DADOS (ARRAY) - DO WHILE
    let contador9 = 0; //iterador
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]; //array de meses
    do { //inicia o loop
        console.log("Mês: "+meses[contador9]); //acessa valor do array pelo índice indicado pelo iterador - exibe o mês
        contador9++; //incrementa o iterador
    } while (contador9 < meses.length); //enquanto o contador for menor que o tamanho do array

//separador de resultados
console.log("\n==============//DO .. WHILE - MENSALIDADE X DIAS DE ATRASO//===============\n");    
   
    //DO .. WHILE - MENSALIDADE DIAS DE ATRASO
    let valor_mensalidade = 100; //valor da mensalidade
    let taxa_multa = 0.02; //2% taxa de multa
    let total_dias = 10; //total de dias de atraso
    let contador10 = 0; //iterador
    do { //inicia o loop
        let dias_atraso = contador10; //variável para armazenar o número de dias de atraso
        let valor_multa = valor_mensalidade * taxa_multa * dias_atraso; //valor da multa
        let novo_valor_mensalidade = valor_mensalidade + valor_multa; //novo valor da mensalidade com a multa
        console.log("dia(s) de atraso: "+dias_atraso+" - valor da mensalidade R$: "+valor_mensalidade.toFixed(2)+" - valor da multa: "+valor_multa.toFixed(2)+" - novo valor da mensalidade: "+novo_valor_mensalidade.toFixed(2)); //exibe o número de dias de atraso, valor da mensalidade, valor da multa e novo valor da mensalidade com a multa
        contador10++; //incrementa o iterador
        console.log("\n"); //inclui uma linha em branco para separar os resultados
    } while(contador10 <= total_dias); //enquanto o contador for menor ou igual ao total de dias de atraso
    
//separador de resultados
console.log("\n==============//DO .. WHILE - contar de 1 a 5//===============\n");    

    //CONTAR DE 1 a 5
    let contador7 = 0;
    do {
        console.log(contador7);
        contador7++;
    } 
    while(contador7 <= 5); //enquanto o contador for menor ou igual a 5

//separador de resultados
console.log("\n==============//DO .. WHILE - conta regressiva de 10 a 0//===============\n");    

    let contador8 = 10;
    do {
        console.log(contador8);
        contador8--;
    } 
    while (contador8 > 0);