import entradaDados from 'readline-sync'; //import apelido from 'nome-do-plugin'


// Entrada de dados
    let nome = entradaDados.question("Digite seu nome: ");
    console.log('Olá, ' + nome + '!');

//Entrada de dados com validação numérca
//Obs: o método questionInt() só aceita números inteiros, se o usuário digitar um número decimal ou uma string o programa não vai funcionar
//Obs2: somente nos casos de soma é éxigido o uso do método number() para converter string para number, pois na sbtração, multiplicação e divisão não é necessário
    console.log("Calculadora de soma entre x e y: \n");
    let x = entradaDados.questionInt("Digite o valor de x: ");
    let y = entradaDados.question("Digite o valor de y: ");
    let resultado = x + Number(y); //Number() converte string para number
    console.log(nome+", a soma entre " +x+ " e " +y+ " é: \n"+resultado);
    resultado = x - y; //não precisa do Number() pois o resultado já é number
    console.log(nome+", a subtração entre " +x+ " e " +y+ " é: \n"+resultado);
    resultado = x / y; //não precisa do Number() pois o resultado já é number
    console.log(nome+", a divisão entre " +x+ " e " +y+ " é: \n"+resultado);
    resultado = x * y; //não precisa do Number() pois o resultado já é number
    console.log(nome+", a multiplicação entre " +x+ " e " +y+ " é: \n"+resultado);

    //Conversor de milhas para quilômetros 
    let mi = entradaDados.questionInt("Digite o valor em milhas: ");
    let km = mi / 0.62137; //1 milha equivale a 1.60934 km
    console.log(nome+", o valor de " +mi+ " milhas é: \n"+km+ " km");
    
    //e de quilômetros para milhas
    entradaDados.question("Digite o valor em quilômetros: ");
    mi = km * 0.621371; //1 km equivale a 0.621371 milhas
    console.log(nome+", o valor de " +km+ " km é: \n"+mi+ " milhas");

    //Conversor de Celsius para Kelvin  
    console.log("Conversor de Celsius para Kelvin: \n");
    let C = entradaDados.questionInt("Digite o valor em Celsius: ");
    let K = C + 273.15; //1 Celsius equivale a 273.15 Kelvin
    console.log(nome+", o valor de " +C+" Celsius é: "+K+ " Kelvin");

    //Calculando a área de um triângulo
    console.log("Calculando a área de um triângulo: \n");
    let base = entradaDados.questionInt("Digite o valor da base: ");
    let altura = entradaDados.questionInt("Digite o valor da altura: ");
    let area = (base * altura) / 2; //A = b * h / 2
    console.log(nome+", a área do triângulo é: "+area);

    //Objeto lieral
    var aula = {
        id: 10,
        titulo: 'Objetos literais',
        tecnologia: 'JavaScript'
    };
        var usuario_logado = true;
        //Acessando os atributos do objeto literal   
        console.log(aula.id); // 10
        console.log(aula.titulo); // Objetos literais
        console.log(aula.tecnologia); // JavaScript    
        console.log(usuario_logado); // true

    //Coleção de Objetos literais
    var aulas = [
        { id: 1, titulo: 'Objetos literais', tecnologia: 'JavaScript' },
        { id: 2, titulo: 'Objetos literais', tecnologia: 'JavaScript' },
        { id: 3, titulo: 'Objetos literais', tecnologia: 'JavaScript' }
    ];
        //Acessando os atributos do objeto literal   
        console.log(aulas[0].id); // 1
        console.log(aulas[0].titulo); // Objetos literais
        console.log(aulas[0].tecnologia); // JavaScript
        