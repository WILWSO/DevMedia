programa
{
 funcao inicio()
 {
  inteiro tentativas = 3
  inteiro resposta

  enquanto (tentativas > 0)
  {
   escreva ("\nResposta incorreta.\nVocê ainda tem "+tentativas+" tentativas\n\n")

   escreva("2 + 2 é igual a...?\n\n")
   escreva("1) 6\n")
   escreva("2) 4\n")
   escreva("3) 8\n")
   escreva("4) 9\n")
   leia(resposta)

   escolha (resposta)
   {
    caso 1:
     tentativas = tentativas - 1
     se(tentativas == 0)
     {
      escreva("\nVocê errou a questão e ficou sem tentativas")
     }
     pare
    caso 2:
     escreva("\nVocê acertou a questão")
     tentativas = 0
     pare
    caso 3:
     tentativas = tentativas - 1
     se(tentativas == 0)
     {
      escreva("\nVocê errou a questão e ficou sem tentativas")
     }
     pare
    caso 4:
     tentativas = tentativas - 1
     se(tentativas == 0)
     {
      escreva("\nVocê errou a questão e ficou sem tentativas")
     }
     pare
   }
  }
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 123; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */