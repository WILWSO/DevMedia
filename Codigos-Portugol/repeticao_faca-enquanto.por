programa
{

 funcao inicio()
 {
    inteiro contador = 1
    real nota
    real soma_nota = 0
    real media

    faca
    {
        escreva("Informe a "+contador+"ª nota: ")
        leia(nota)

        soma_nota = soma_nota + nota
        contador = contador + 1

    }
    enquanto(contador <= 4)

    media = soma_nota / 4

    se(media >= 7)
    {
        escreva("\nSua média é: "+media+"\nVocê foi Aprovado.\n")
    }
    senao
    {
        escreva("\nSua média é: "+media+"\nVocê foi Reprovado.\n")
    }
  }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 518; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */