
//separador de resultados
console.log("\n==============//FOR - PARCELAS//===============\n");

    // FOR - Estruturas de repetição
    let valor_produto = 500; //valor do produto
    for (let contador = 1; contador <= 5; contador++) { //contador de 1 a 5
        let valor_parcela = valor_produto / contador //valor da parcela
        console.log("Número de parcelas: "+contador+" + valor da parcela "+valor_parcela.toFixed(2)); //exibe o número de parcelas e o valor da parcela
    } //exibe o número de parcelas e o valor da parcela

//separador de resultados
console.log("\n==============//FOR - MESES DO ANO//===============\n");

    //FOR - MESES DO ANO
    let meses2 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]; //array de meses
    for(contador11 = 0; contador11 < meses2.length; contador11++) { //inicia o loop, coloca a condição de parada e incrementa o contador
        console.log("Mês: "+meses2[contador11]); //acessa valor do array pelo índice indicado pelo iterador - exibe o mês
    } //exibe o mês

    //separador de resultados
    console.log("\n==============//FOR - BREAK//===============\n");

    //FOR - BREAK
    // O BREAK interrompe o loop completamente quando a condição for atendida
    // mostrará apenas o primeiro funcionário habilitado encontrado)
    let funcionarios2 = [
        {id: 1, nome: "César", habilitado: false, salario: 2000},
        {id: 2, nome: "Carlos", habilitado: false, salario: 1500},
        {id: 3, nome: "Diogo", habilitado: true, salario: 3000},
        {id: 4, nome: "Danilo", habilitado: false, salario: 2500},
        {id: 5, nome: "Pedro", habilitado: true, salario: 3500},
    ];
    let encontrouHabilidado2 = false; //variável para verificar se encontrou funcionário habilitado
    for (let contador12 = 0; contador12 < funcionarios2.length; contador12++) { //inicia o loop, coloca a condição de parada e incrementa o contador
        let funcionario = funcionarios2[contador12]; //acessa valor do array pelo índice indicado pelo iterador - exibe o funcionário
        if (funcionario.habilitado == true) { //se o funcionário estiver habilitado no array
            console.log("Funcionário habilitado: "+funcionario.nome); //exibe o nome do funcionário habilitado
            encontrouHabilidado2 = true; //atualiza a variável para true
            break; //interrompe o loop
        } 
    }
    if (!encontrouHabilidado2) {
        console.log("Nenhum funcionário habilitado encontrado!"); 
    } //exibe mensagem se não encontrou funcionário habilitado

    //separador de resultados
    console.log("\n==============//FOR - CONTINUE//===============\n");

    //FOR - CONTINUE
    // O CONTINUE interrompe a iteração atual e pula para a próxima iteração
    // mostrará todos os alunos, exceto os reprovados (encontrados com media < 6).
    let alunos3 = [
        {id: 1, nome: "Bruna", media: 8},
        {id: 2, nome: "Carlos", media: 7},
        {id: 3, nome: "Diogo", media: 5},
        {id: 4, nome: "Danilo", media: 4},
        {id: 5, nome: "Pedro", media: 10},
    ];
    for (let contador13 = 0; contador13 < alunos3.length; contador13++) { //inicia o loop, coloca a condição de parada e incrementa o contador
        let aluno = alunos3[contador13]; //acessa valor do array pelo índice indicado pelo iterador - exibe o aluno
        if (aluno.media < 6) { //se a média do aluno for menor que 6
            continue; //pula para a próxima iteração. 
        } //isso significa que não será listado o aluno encontrado na iteração, mas todos os demais. 
        console.log("id: "+ aluno.id + " - Nome: " + aluno.nome + " - Média: " + aluno.media); //exibe o id, nome e média do aluno
    } //exibe o id, nome e média de todos os alunos, exceto os reprovados (encntrados com media < 6).
