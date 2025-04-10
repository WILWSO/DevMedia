programa
{
	
	funcao inicio()
	{
	real juros
	real desconto
	real porcentagem
	real valor
	
	escreva("informe o valor da compra: ")
	leia (valor)
	
	escreva("informe a porcentagem: ")
	leia(porcentagem)
		
	desconto = valor - (valor * porcentagem / 100)
	juros = valor + (valor * porcentagem / 100)
	
	escreva("\n"+valor+" com "+porcentagem+"% de desconto é "+desconto)	
	escreva("\n"+valor+" com "+porcentagem+"% de juros é "+juros)	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 131; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */