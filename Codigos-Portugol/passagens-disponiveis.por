programa {
	funcao inicio()
 	{
	  inteiro passagens = 20
	  inteiro numero_compra
  
	enquanto (passagens > 0) //o erro foi acusado no "se"
	  {   
		escreva ("\nDeseja comprar quantas passagens? ")
	   	leia(numero_compra) 	   
		se (passagens >= numero_compra)
		{
	    	passagens = passagens - numero_compra
	    	}	   
		senao	
	   	{	    
		escreva ("Temos apenas "+passagens+" passagens disponíveis\n\n")
	   	}
	  }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 428; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */