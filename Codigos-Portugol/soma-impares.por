programa
{
 funcao inicio ()
 {
  inteiro contador = 5
  inteiro soma = 0
	enquanto (contador <= 25) {   
	se (contador % 2 != 0)   {
	    soma = soma + contador
	    escreva ("O númeo "+contador+" é ímpar e será somado\n")
	  }
	   contador = contador + 1
	  }  
	escreva ("A soma dos números ímpares entre 5 e 25 é: "+soma)
	 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 301; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */