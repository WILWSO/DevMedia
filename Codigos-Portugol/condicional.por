programa
{
  funcao inicio()
  {
    inteiro x = 6

    se(x % 2 == 0)
    {
      //Executa se o resultado da expressão for verdadeiro
      escreva(x+" é um número par")
    }
    senao
    {
      //Executa se o resultado da expressão for falso
      escreva(x+" é um número ímpar")
    }
  }


  //SEGUNDO EXEMPLO
    funcao divisao()
    {
        real dividendo
        real divisor
        real resultado

        escreva("Informe o dividendo: ")
        leia(dividendo)

        escreva("Informe o divisor: ")
        leia(divisor)

         se(divisor > 0)
         {
           resultado = dividendo / divisor
           escreva(resultado)
         }
         senao
         {
           escreva("Não é possível dividir por zero")
          }
    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 297; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */