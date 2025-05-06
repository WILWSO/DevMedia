//separador de resultados
console.log("\n==============//FOR .. OF - ARRAY DE CLIENTES//===============\n");

    //FOR .. OF - ARRAY DE CLIENTES
    //O FOR .. OF é usado para percorrer os VALORES de um array ou de um objeto iterável (como uma string).
    let clientes_array = [ //array de clientes
        {id: 1, nome: "Mônica", telefone: "99999-6565"},
        {id: 2, nome: "Carlos", telefone: "99999-6565"},
        {id: 3, nome: "Diogo", telefone: "99999-6565"}
    ];  
    for (let cliente of clientes_array) { //inicia o loop criando uma variável para o iterador, que irá percorrer todos os valores do array clientes_array
       let nome = cliente.nome; //atribui o valor da propriedade nome a variável nome
       let telefone = cliente.telefone; //atribui o valor da propriedade telefone a variável telefone
         console.log("Nome: "+nome+" - Telefone: "+telefone); //exibe o nome e telefone do cliente
    } //exibe o nome e telefone do cliente

//separador de resultados
console.log("\n==============//FOR .. OF - NOTAS//===============\n");
    
    let notas_trimestrais = [9, 7, 6, 7];
    let total_notas = notas_trimestrais.length;
    let soma_notas = 0; //variável para armazenar a soma das notas
    for (let nota of notas_trimestrais) {
        soma_notas = soma_notas + nota;// soma as notas do array notas_trimestrais e armazena na variável soma_notas
    } //soma as notas do array notas_trimestrais e armazena na variável soma_notas
    let media = soma_notas / total_notas; //calcula a média das notas
    console.log("Média: " + media); //exibe a média das notas
    if (media >= 7) {//se a média for maior ou igual a 7
        console.log("Aprovado");
    } else if (media >= 6 && media < 7) {//se a média for maior ou igual a 6 e menor que 7
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    } //exibe a situação do aluno (aprovado, recuperação ou reprovado)

//separador de resultados
console.log("\n==============//FOR .. OF - PRATICANDO - CURSO DE IDIOMAS//===============\n");

    let cursos_idiomas = [ //array de cursos de idiomas
        {id: 1, curso: "Inglês", preco: 2500, carga_horaria: 160},
        {id: 2, curso: "Espanhol", preco: 1500, carga_horaria: 110},
        {id: 3, curso: "Francês", preco: 3600, carga_horaria: 200},
        {id: 4, curso: "Chinês", preco: 5500, carga_horaria: 400},
        {id: 5, curso: "Alemão", preco: 3800, carga_horaria: 230},
        {id: 6, curso: "Italiano", preco: 2900, carga_horaria: 180},
        {id: 7, curso: "Japonês", preco: 4500, carga_horaria: 300},
    ];
    for (let curso of cursos_idiomas) { //inicia o loop criando uma variável para o iterador, que irá percorrer todos os valores do array cursos_idiomas
        let id = curso.id; //atribui o valor da propriedade id a variável id
        let nome_curso = curso.curso; //atribui o valor da propriedade curso a variável nome_curso
        let preco_curso = curso.preco; //atribui o valor da propriedade preco a variável preco
        let carga_horaria_curso = curso.carga_horaria; //atribui o valor da propriedade carga_horaria a variável carga_horaria
        let preco_hora_curso = preco_curso / carga_horaria_curso; //calcula o preço por hora do curso
        console.log("id: "+id);
        console.log("Curso: "+nome_curso); //exibe o nome do curso
        console.log("Preço: R$"+preco_curso.toFixed(2)); //exibe o preço do curso
        console.log("Carga horária: "+carga_horaria_curso+" horas"); //exibe a carga horária do curso
        if (preco_hora_curso >= 15) { //se o preço por hora do curso for maior ou igual a 15
            console.log("Hora/aula superior ou igual a R$ 15,00"); //exibe o preço por hora do curso
        } else { //se o preço por hora do curso for menor que 15
            console.log("Hora/aula inferior a R$ 15,00"); //exibe o preço por hora do curso
        } //exibe o preço por hora do curso
        console.log("\n")
    };