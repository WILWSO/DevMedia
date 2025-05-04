programa
{
 funcao inicio()
 {
  inteiro tentativas = 2
  inteiro resposta

 enquanto(tentativas > 0)
  {
   escreva ("Responda à pergunta corretamente. Você tem "+tentativas+" tentativas\n\n")

   escreva("3 + 4 é igual a...?\n\n")
   escreva("1) 7\n")
   escreva("2) 8\n")
   escreva("3) 4\n")
   escreva("4) 11\n")
   leia(resposta)

   escolha(resposta)
   {
    caso 1:
     escreva("\nVocê acertou a questão")
     tentativas = 0
     pare
    caso 2:
     tentativas = tentativas - 1
     se(tentativas == 0)
     {
      escreva("\nVocê errou a questão e ficou sem tentativas")
     }
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
 * @POSICAO-CURSOR = 98; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */