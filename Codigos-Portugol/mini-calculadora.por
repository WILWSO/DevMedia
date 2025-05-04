
/*
 ******* Mini calculadora ********

- A aplicação é uma mini calculadora com duas operações: Soma e Multiplicação;
- Se o usuário optar pela soma, a aplicação irá solicitar que ele informe quatro números que serão somados;
- Se o usuário optar pela multiplicação a aplicação solicitará que ele informe três números que serão multiplicados;
- No fim da aplicação o resultado do cálculo é impresso na tela.
*/

programa
{
 funcao inicio()
 {
  inteiro contador = 1
  caracter operacao 
  inteiro numero
  inteiro total

  escreva("Escolha qual operação deseja efetuar:\n\n")
  escreva("+ - Soma\n")
  escreva("* - Multiplicação\n")
  leia (operacao)

  escolha (operacao) {
  //para adição
   caso '+':
    total = 0
    enquanto (contador <= 4) {
     escreva("\nInforme o "+contador+"º número: ")
     leia(numero)
     total = total + numero
     contador = contador + 1
    }
    escreva("\nTotal: "+total)
    pare
        
  //para multiplicação
   caso '*':
    total = 1
    enquanto (contador <= 3) {
     escreva("\nInforme o "+contador+"º número: ")
     leia(numero)
     total = total * numero
     contador = contador + 1
    }
    escreva("\nTotal: "+total)
    pare
  }
 }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 504; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */