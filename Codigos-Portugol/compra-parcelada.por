programa
{
 funcao inicio()
 {
  real valor_total
  inteiro forma_pagamento
  inteiro contador = 1
  inteiro parcelas  
  real valor_parcelado
  
	escreva("Informe o valor total da compra: ")  
	leia (valor_total)
	escreva("\nInforme o número de parcelas (Entre 1x e 12x):\n")
	leia(parcelas)
	  
	valor_parcelado = valor_total / parcelas
     escreva("\nO total da sua compra foi de R$ "+valor_total+"\n")	  
	escreva("Você vai pagar em "+parcelas+"x de "+valor_parcelado+"\n\n")	  
	enquanto(contador	 <= 	parcelas)
	  {
	   escreva ("Mês "+contador+" - R$ "+valor_parcelado+"\n")
	   contador = contador + 1
	  }
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 617; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */