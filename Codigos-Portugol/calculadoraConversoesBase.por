//Essa é a solução que encontramos para a aplicação, 
//não tem problema se a sua solução for difrerente, 
//o importante é alcançar o objetivo
programa
{
	
	funcao inicio()
	{
		inteiro tipoConversor
		real valorConverter = 0.0
		cadeia mensagem = ""
		real resultado
	faca {
		escreva("Calculadora de conversões - ")
		escreva("Escolha uma opção:\n\n")
		
		escreva("1 - Celsius para Fahrenheit\n")
		escreva("2 - Quilômetros para Milhas\n")
		escreva("3 - Sair\n\n")
		leia(tipoConversor)

		//parar o loop da aplicação
		se (tipoConversor == 3)	{
			pare
		}	
		escolha (tipoConversor) 
			{
			caso 1: //Convertendo de Celsius para Fahrenheit   			
   				escreva("Digite uma temperatura em °C: ")
   				leia(valorConverter)
   				resultado = (valorConverter * 1.8 + 32)
   				mensagem = ("A temperatura convertida para Fahrenheit é "+resultado+" °F\n\n")
   				pare
   			
			caso 2: //Convertendo km para milhas				
				escreva("Digite o valor em Quilômetros: ")
   				leia(valorConverter)
   				resultado = (valorConverter * 0.621371)
				mensagem = ("O valor convertido para milhas é: "+resultado+" \n\n")
				pare
							
			caso contrario:
				escreva("\nOpção invalida")	
				pare		
			}
					
		escreva("\nOpção escolhida: "+tipoConversor)
		escreva("\nValor digitado: "+valorConverter+"\n")
		escreva("\n"+mensagem)
	}
	enquanto(tipoConversor < 3)
	}
}




/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1365; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */