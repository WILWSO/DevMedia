programa
{
 funcao inicio()
 {
  inteiro contador = 1
  inteiro candidato_A = 0
  inteiro candidato_B = 0
  inteiro voto
  inteiro nulos = 0

  
escreva ("Sistema de votação\n\n")  
enquanto(contador <= 11) {
   escreva("Em quem você vai votar?\n\n")   
   escreva("1) Candidato A\n")
   escreva("2) Candidato B\n\n")   
   leia(voto)  
   
   escolha(voto) {
caso 1:
     candidato_A = candidato_A + 1
     pare    
caso 2:
     candidato_B = candidato_B + 1
     pare    
caso contrario:
     escreva("Opção inválida\n")
     nulos = nulos+1 //somando votos nao validos
     pare
   }
   //resultado parcial
   se (contador < 11) {//omitir o resultado parcial quando for mostrar o resultado final
   escreva("\nfaltam "+(11 - contador)+" votos para terminar a eleição\n")
   escreva("***** resultado parcial da eleição *****\n")
   escreva("votos nulos: "+nulos+"\n")
   escreva("votos Candidato A: "+candidato_A+"\n") 
   escreva("votos Candidato B: "+candidato_B+"\n")
   escreva("**********************************\n")
   }
   contador = contador+1
  } 
  //resultado final 
  escreva("\n********* final da votação **********\n")
  escreva("Total candidato A: "+candidato_A+"\n") 
  escreva("Total Candidato B: "+candidato_B+"\n")
  escreva("Total de votos nulos: "+nulos+"\n")
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1282; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */