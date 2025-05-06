
//separador de resultados
console.log("\n==============//FOR .. IN//===============\n");

    //FOR .. IN - Estruturas de repetição
    //O FOR .. IN é usado para percorrer TODAS as propriedades de um objeto ou os índices de um array.
    //A diferença é que o FOR .. IN consegue pegar o nome das propriedades de um objeto, enquanto o FOR só consegue pegar os valores pelos índices.
    //O FOR .. IN é útil quando você não sabe quantas propriedades um objeto tem ou quando deseja percorrer todas as propriedades de um objeto.
    //A idea é preencher o CAPTION (propriedade) e o campo (valor) na recuperação do BANCO DE DADOS em um formulario de consulta do frotnend.
    let aluno = { //objeto aluno
        nome: "César", //propriedade nome
        idade: 30, //propriedade idade
        curso: "JavaScript", //propriedade curso
        nota: 8.5 //propriedade nota
    };
    for (let propriedade in aluno) { //inica o loop criando uma variável para o iterador, que irá percorrer todas as propriedades do objeto aluno
        console.log(propriedade+": "+aluno[propriedade]); //acessa pelo índice indicado no iterador - exibe a propriedade e o valor da propriedade
    } //exibe a propriedade e o valor da propriedade do objeto aluno

//separador de resultados
console.log("\n==============//FOR .. IN - CARRO COM DESCONTO//===============\n");

    //EXEMPLO 2 - FOR .. IN - OBJETO CARRO
    let carro = { //objeto carro
        marca: "Fusca", //propriedade marca
        ano: 1970, //propriedade ano
        cor: "azul", //propriedade cor
        preco: 20000 //propriedade preco
    };
    let percentual_desconto = 5;
    for (let propriedade in carro) { //inica o loop criando uma variável para o iterador, que irá percorrer todas as propriedades do objeto carro
        if (propriedade == "preco") { //se a propriedade for preco
            let preco = propriedade; //atribui o valor da propriedade a variável preco
            let desconto = carro[preco] * percentual_desconto / 100; //calcula o desconto
            let novo_preco = carro[preco] - desconto; //calcula o novo preço
            console.log("O preço do carro com desconto de "+percentual_desconto+"% é: R$"+novo_preco.toFixed(2)); //exibe o novo preço do carro com desconto
        } else { //se a propriedade não for preco
            console.log(propriedade+": "+carro[propriedade]); //acessa pelo índice indicado no iterador - exibe a propriedade e o valor da propriedade
        } //exibe a propriedade e o valor da propriedade do objeto carro
    };