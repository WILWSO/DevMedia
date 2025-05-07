//Separador de resultados
console.log("\n==============//TRIM - ESPACOS VAZIOS//===============\n");
//TRIM - Remove os espaços em branco do início e do fim de uma string. A função não altera a string original, mas retorna uma nova string com os espaços removidos. A função trim() é útil quando você deseja remover espaços em branco desnecessários de uma string, como quando o usuário digita um valor em um campo de formulário e pode acidentalmente adicionar espaços em branco extras no início ou no fim do valor.
//A função trim() não remove espaços em branco entre os caracteres da string, apenas os espaços em branco do início e do fim da string. Se você deseja remover espaços em branco entre os caracteres da string, pode usar a função replace() com uma expressão regular.
//A função trim() é útil quando você deseja comparar duas strings sem se preocupar com espaços em branco desnecessários. Por exemplo, se você deseja verificar se uma string é igual a outra, independentemente de como elas foram escritas (com espaços em branco ou não).

let nome = "   Wilton   "; //string com espaços em branco no início e no fim
let nome_sem_espacos = nome.trim(); //remove os espaços em branco do início e do fim da string
console.log(nome_sem_espacos); //exibe a string sem espaços em branco

//Separador de resultados
console.log("\n==============//TRIM - ESPACOS VAZIOS//===============\n");
//COMPARANDO telefones com espaços em branco
let telefone_1 = "  62 9 9999-9999 "; //string com espaços em branco no início e no fim
let telefone_2 = "62 9 9999-9999"; //string sem espaços em branco

    if (telefone_1 == telefone_2) { //se as strings forem iguais
        console.log("Os telefones são iguais"); //exibe os telefones são iguais
    }
    else { //se as strings não forem iguais
        console.log("Os telefones são diferentes"); //exibe os telefones são diferentes
    } //exibe os telefones são diferentes
    console.log(telefone_1);
    console.log(telefone_2); //exibe os telefones são diferentes