//separador de resultados
console.log("\n==============//ARRAYS - COLEÇÃO DE DADOS//===============\n");
//COLEÇÃO DE DADOS - Estruturas de dados
//ARRAYS - Estruturas de dados
 //Agrupa dados de um mesmo domínio/contexto em uma única variável
 var alunos = [
    "Andréia Gomes",
    "Letícia Castro",
    "Lucas Silva",
    "Rogério Mendonça",
    "Tomás Mendes"
];

//separador de resultados
console.log("\n==============//ACESSANDO OS ELEMENTOS//===============\n");

    //Acessando os elementos do array
    console.log(alunos); // TODOS os alunos
    console.log(alunos[1]); // Letícia Castro
    console.log(alunos[2]); // Lucas Silva
    //Usando a propriedade LENGTH retorna a quantidade de elementos do array
    //O índice começa em 0, então o último elemento é o length-1
    console.log(alunos[alunos.length-1]); //Último elemento

//separador de resultados
console.log("\n==============//CALCULANDO A MÉDIA DE ALUNOS//===============\n");

    //CALCULANO A MEDIA DE ALUNOS
    var notas_cuatrimestre = [
        7, 6, 8, 5
    ];
    var total_notas = 4;
    var soma_notas = notas_cuatrimestre[0] + notas_cuatrimestre[1] + notas_cuatrimestre[2] + notas_cuatrimestre[3];
    var media_aluno = soma_notas / total_notas;
    var msg ="El estudiante está ";
    console.log("El promedio del estudiante es: " + media_aluno); // A média do aluno é: 6.5
    console.log(media_aluno >= 7 ? msg+"Aprovado!" : media_aluno >= 5 ? msg+"de Recuperatorio!" : msg+"Reprovado!");

//separador de resultados
console.log("\n==============//ALTERANDO ELEMENTOS//===============\n");

    //ALTERANDO ELEMENTOS DO ARRAY
    //se definimos um indice existente alteramos o valor
    notas_cuatrimestre[3] = 7; //MODIFICA
    console.log("Alteramos a última nota do array: "+notas_cuatrimestre); 

    //separador de resultados
console.log("\n==============//INCLUINDO ELEMENTOS//===============\n");
    
    //se o inidice não existe mas é sequencial, o JS cria um novo elemento no array e agrega o valor
    notas_cuatrimestre[4] = 6; //INSERE
    console.log("Incluimos uma nota no array: "+notas_cuatrimestre); 

//separador de resultados
console.log("\n============//CONTANDO OS ELEMENTOS DO ARRAY//============\n");
    
    //CONTANDO OS ELEMENTOS DO ARRAY
    //O método LENGTH retorna a quantidade de elementos do array
    console.log("há "+alunos.length+" elementos no array."); //quantidade de alunos

//separador de resultados
console.log("\n=========================================\n");

    //ATUALIZANDO AUTOMATICAMENTE O TOATAL DE NOTAS
    total_notas = notas_cuatrimestre.length; //atualiza o tamanho do array
    console.log("O total de notas atualizadas é: "+total_notas)

//separador de resultados
console.log("\n============//ARRAY DE TEXTOS - FRASES DO DIA//============\n");

    //ARRAY DE TEXTOS - FRASE DO DIA
    var frases_do_dia = [
        "Sorte é o resultado de muito esforço, trabalho e dedicação",
        "Imagine uma nova história para sua vida e acredite nela",
        "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
        "Se existe uma forma de fazer melhor, descubra-a",
        "Seja a mudança que você deseja ver no mundo.",
        "Um objetivo nada mais é do que um sonho com limite de tempo",
        "Você precisa fazer aquilo que pensa que não é capaz de fazer",
        "A persistência é o caminho do êxito.",
        "Concentre-se naquilo que você é bom, delegue todo o resto",
        "A amizade duplica as alegrias e divide as tristezas",
        "O que quer que você lute, você fortalece, e o que você resiste, persiste",
        "Lembre-se: sua verdadeira força, vem de dentro",
        "Nada acontece a menos que sonhemos antes",
        "Para quem ama, qualquer sacrifício é alegria",
        "A paz é a única forma de nos sentirmos realmente humanos",
        "Não existe um caminho para a felicidade. A felicidade é o caminho",
        "O amor é a alegria acompanhada da ideia de uma causa exterior",
        "A criatividade é ilimitada, pois a arte só precisa de motivação",
        "Fé, duas letras que podem mudar sua vida, acredite",
        "Que a vontade de vencer seja minha maior motivação",
        "Nunca subestime o poder de sua visão para mudar o seu mundo",
        "Não coloque limites em seus sonhos. Coloque fé",
        "Tenho certeza de que se eu sorrisse menos teria menos amigos",
        "Não espere por uma crise para descobrir o que é importante em sua vida",
        "Quem sorri sem parar não é alegre, é falso",
        "A alegria de fazer o bem é a única felicidade verdadeira",
        "A alegria evita mil males e prolonga a vida",
        "Coloque fé onde falta coragem",
        "Levanta, sacode a poeira e dá a volta por cima",
        "O que vale a pena possuir, vale a pena esperar",
        "A esperança é o sonho do homem acordado"
    ];
    var data_hoje = new Date(); //cria um objeto de data com a data atual
    var numero_escolhido = data_hoje.getDate(); //pega o dia do mês atual
    numero_escolhido--; //subtrai/decrementa 1 do dia do mês atual para pegar o índice correto do array (começa em 0)
    var frase_do_dia = frases_do_dia[numero_escolhido]; //pega a frase do dia de acordo com o dia do mês
    console.log("* Data de hoje: " + data_hoje); //data de hoje: Wed Oct 04 2023 10:00:00 GMT-0300 (Horário Padrão de Brasília)
    console.log("numero escolhido: " + numero_escolhido); //numero escolhido: 30
    console.log("A frase do dia é: " + frase_do_dia); //A frase do dia é: "A esperança é o sonho do homem acordado"

//separador de resultados
console.log("\n==============//CONSTANTES E VARIÁVEIS//===============\n");

   //CONSTANTES E VARIÁVEIS
   const nome_completo = "Andréia Gomes"; //string
   console.log(nome_completo); //imprime o nome completo "Andréia Gomes"
   console.log(nome_completo.toUpperCase()); //imprime o nome completo em maiúsculas "ANDRÉIA GOMES"
   console.log(nome_completo.length); //imprime o tamanho da string 13

   var numero_1 = 9; //number
   var numero_2 = 10; //number   
   console.log(numero_1 != numero_2); //imprime false (9 é diferente de 10)
   
   //incremento e decremento
   console.log(++numero_1); //incrementa 1 no número e imprime 10
   console.log(numero_2++); //incrementa 1 no número e imprime 10 (mas o valor de numero_2 agora é 11)
   
   //soma e atribuição
    numero_1 += numero_2; //soma o valor de numero_1 com numero_2 e atribui o resultado a numero_1
    console.log(numero_1 >= numero_2); //imprime false (10 é maior ou igual a 11)

//separador de resultados
console.log("\n=============//SOBRESCREVENDO VARIAVEL//=============\n");

   var url = "https://api.com.br/usuarios";
   url = "https://api.com.br/registos";
   console.log(url); //imprime a nova url "https://api.com.br/registos"

//separador de resultados
console.log("\n=========================================\n");

