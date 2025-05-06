//separador de resultados
console.log("\n==============//ESTRUTURAS DE REPETIÇÃO//===============\n");
//=== ESTRUTURAS DE REPETIÇÃO ===
// WHILE - Estruturas de repetição
// O WHILE executa o bloco de código enquanto a condição for verdadeira.

//separador de resultados
console.log("\n==============//WHILE - PARCELAS//===============\n");

    //WHILE - Estruturas de repetição
    let contador = 0; //contador de 0 a 5
    while (contador < 5)    {
        console.log("Número de parcelas: "+contador+" + valor da parcela "+(valor_produto / contador).toFixed(2)); //exibe o número de parcelas e o valor da parcela
        contador++; //incrementa o contador
    }; //exibe o número de parcelas e o valor da parcela

//separador de resultados
console.log("\n==============//WHILE - TABUADA DE MULTIPLICAÇÃO//===============\n");

//WHILE EXEMPLO 2 - tabuada de multiplicação
    let numero = 3;
    let contador1 = 0;
    console.log("Tabuada de multiplicação - Nº: "+numero);
    while (contador1 <= 10) {
        let resultado = numero * contador1; //resultado da multiplicação
        console.log(numero+" x "+contador1+" = "+resultado); //exibe o número da tabuada e o resultado
        contador1++; //incrementa o contador
    } //exibe o número da tabuada e o resultado

//separador de resultados
console.log("\n==============//WHILE - JUROS DE EMPRÉSTIMO//===============\n");

    //WHILE EXEMPLO 3 - Juros de empréstimo
    let capital_emprestado = 3000; //capital emprestado
    let taxa_juros = 0.02; //2% taxa de juros
    let contador3 = 1; //contador de 1 a 5
    let paracelas_totais = 5; //total de parcelas
    while (contador3 <= paracelas_totais) {
        let num_parcela = contador3; //número da parcela
        let juros_emprestimo = capital_emprestado * taxa_juros * num_parcela; //juros do empréstimo
        console.log("A taxa de juros no período de "+num_parcela+" mês(es) é: "+juros_emprestimo.toFixed(2)); //exibe a taxa de juros no período
        contador3++; //incrementa o contador
    } //exibe a taxa de juros no período

//separador de resultados
console.log("\n==============//WHILE - PERCORRENDO UM ARRAY DE STRINGS//===============\n");

    //WHILE - PERCORRENDO UMA COLEÇÃO DE DADOS (ARRAY)
    let paises = ["Brasil", "Argentina", "Chile", "Paraguai", "Uruguai"]; //array de países
    let contador4 = 0; //contador de 0 a 5
    while (contador4 < paises.length) { //enquanto o contador for menor que o tamanho do array
        console.log("País: "+paises[contador4]); //acessa valor do array pelo índice - exibe o país
        contador4++; //incrementa o contador
    } //exibe o país

//separador de resultados
console.log("\n==============//WHILE - PERCORRENDO UM ARRAY DE NUMEROS//===============\n");
    //WHILE - PERCORRENDO UM ARRAY DE NUMEROS//
    let numeros = [10, 5, 7, 8, 9, 6, 12, 4]; //array de números
    let total_impares = 0; //total de números ímpares
    let total_pares = 0; //total de números pares
    let contador5 = 0;
    while (contador5 < numeros.length) { //enquanto o contador for menor que o tamanho do array
        if (numeros[contador5] % 2 == 0) { //se o número for par
            total_pares++; //incrementa o total de números pares
        } else { //se o número for ímpar
            total_impares++; //incrementa o total de números ímpares
        } 
        contador5++; //incrementa o contador
    } 
    console.log("O total de números ímpares: "+total_impares); //exibe o total de números impares
    console.log("O total de números pares: "+total_pares); //exibe o total de números pares

//separador de resultados
console.log("\n==============//WHILE - NOME DO ALUNO//===============\n");

    let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];
    let contador6 = 0;
    while (contador6 < alunos.length) {
        let aluno_nome = alunos[contador6]; //acessa valor do array pelo índice e a VARIÁVEL receberá o valor na posição do índice indicado pelo iterador
        console.log("Nome do aluno: "+aluno_nome); //exibe o nome do aluno
        contador6++; //incrementa o contador
    }

//separador de resultados
console.log("\n==============//WHILE - BREAK//===============\n");
    
    //COLEÇÃO DE OBJETOS - WHILE BREAK
    // O BREAK interrompe o loop completamente quando a condição for atendida 
    // mostrará apenas o primeiro funcionário habilitado encontrado)
    let funcionarios = [
        {id: 1, nome: "César", habilitado: false, salario: 2000},
        {id: 2, nome: "Carlos", habilitado: false, salario: 1500},
        {id: 3, nome: "Diogo", habilitado: true, salario: 3000},
        {id: 4, nome: "Danilo", habilitado: false, salario: 2500},
        {id: 5, nome: "Pedro", habilitado: true, salario: 3500},
    ]
    let contador7 = 0; //iterador
    let encontrouHabilidado = false; //variável para verificar se encontrou funcionário habilitado
    while (contador7 < funcionarios.length) { //enquanto o contador for menor que o tamanho do array
        let funcionario = funcionarios[contador7]; //acessa valor do array pelo índice indicado pelo iterador - exibe o funcionário
        if (funcionario.habilitado == true) { //se o funcionário estiver habilitado
            console.log("Funcionário habilitado: "+funcionario.nome); //exibe o nome do funcionário habilitado
            encontrouHabilidado = true; //atualiza a variável para true
            break; //interrompe o loop
        } 
        contador7++; //incrementa o iterador  
        } 
    if (!encontrouHabilidado) {
        console.log("Nenhum funcionário habilitado encontrado!"); 
    } //exibe mensagem se não encontrou funcionário habilitado

//separador de resultados
console.log("\n==============//WHILE - CONTINUE//===============\n");
   
    //COLEÇÃO DE OBJETOS - WHILE CONTINUE    
    // O CONTINUE interrompe a iteração atual e pula para a próxima iteração
    // mostrará todos os alunos, exceto os reprovados (encontrados com media < 6).
    let alunos2 = [
        {id: 1, nome: "Bruna", media: 8},
        {id: 2, nome: "Carlos", media: 7},
        {id: 3, nome: "Diogo", media: 5},
        {id: 4, nome: "Danilo", media: 4},
        {id: 5, nome: "Pedro", media: 10},
    ]
    let contador8 = 0; //iterador
    while (contador8 < alunos2.length) { //enquanto o contador for menor que o tamanho do array
        let aluno = alunos2[contador8]; //acessa valor do array pelo índice indicado pelo iterador - exibe o aluno
        contador8++; //incrementa o iterador
        if (aluno.media < 6) { //se a média do aluno for menor que 6
         continue; //pula para a próxima iteração. 
        } //isso significa que não será listado o aluno encontrado na iteração, mas todos os demais. 
        console.log("id: "+ aluno.id + " - Nome: " + aluno.nome + " - Média: " + aluno.media); //exibe o id, nome e média do aluno
    } //exibe o id, nome e média de todos os alunos, exceto os com media < 6).
        
