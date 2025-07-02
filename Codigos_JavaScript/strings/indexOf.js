//separador de resultados
console.log("\n==============//INDEXOF SINTAXIS//===============\n");
//IndexOf serve para encontrar a posição de uma substring dentro de uma string. 
//Se a substring não for encontrada com indexOf, o método retorna -1. 
//O método indexOf() é útil quando você deseja verificar se uma substring está presente em uma string ou quando você deseja encontrar a posição de uma substring dentro de uma string.
//O método devolve o índice da primeira ocorrência da substring encontrada.
//O método indexOf() é sensível a maiúsculas e minúsculas, ou seja, "Brasil" e "brasil" são considerados diferentes.
//O método indexOf() pode receber dois parâmetros: o primeiro é a substring que você deseja encontrar e o segundo é o índice a partir do qual você deseja começar a procurar. Se você não fornecer o segundo parâmetro, a pesquisa começará no início da string.

let texto = "O Brasil é um país tropical"; //string
let posicao = texto.indexOf("país"); //encontra a posição da substring "país" na string "O Brasil é um país tropical"
console.log(posicao); //exibe a posição da substring "país" na string "O Brasil é um país tropical"

//separador de resultados
console.log("\n==============//INDEXOF UTILIDADE//===============\n");
//UTILIDADE - pode ser usado para bloquear uma palavra inadequada em um campo de texto, como quando você deseja verificar se o usuário digitou uma palavra proibida em um campo de comentário ou em um campo de mensagem.

let expressao_prohibida = "palavrão"; //string
let comentario = "Esse é um comentário com palavrão"; //string
comentario = comentario.trim(); //remove os espaços em branco do início e do fim da string
comentario = comentario.toLowerCase(); //converte a string para minúsculas

    if (comentario.indexOf(expressao_prohibida) != -1) { //se a substring "palavrão" estiver presente na string
        console.log("Comentário contém uma palavra proibida"); //exibe a mensagem
    } else { //se a substring "palavrão" não estiver presente na string
        console.log("Comentário permitido"); //exibe a mensagem
    } //exibe a mensagem