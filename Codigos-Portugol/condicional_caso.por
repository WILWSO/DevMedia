programa
{
//liga da justiça
funcao inicio()
{
  inteiro opcao

  escreva("Escolha um filme para assistir:\n\n")

  escreva("1) Liga da Justiça\n")
  escreva("2) Mulher Maravilha\n")
  escreva("3) Batman vs Superman\n\n")
  leia(opcao)

  escolha(opcao)
  {
    caso 1:
      escreva("\nVocê vai assistir: Liga da Justiça")
      pare
    caso 2:
      escreva("\nVocê vai assistir: Mulher Maravilha")
      pare
    caso 3:
      escreva("\nVocê vai assistir: Batman vs Superman")
    pare
  caso contrario:
    escreva("\nVocê escolheu uma opção inválida")
    pare
  }
  
 }

//DIAS DA SEMANA
funcao DIAS_SEMANA()
  {
    inteiro dia_semana

    escreva("Dica de série: \n")
    escreva("Informe que dia da semana é hoje: (De 1 a 7 onde 1 = Domingo): ")
    leia(dia_semana)

    escolha(dia_semana)
    {
      caso 1:
        escreva("\nHoje é Domingo, dia de ver Flash")
        pare
      caso 2:
        escreva("\nHoje é segunda-feira, vamos ver Lendas do Amanhã")
        pare
      caso 3:
        escreva("\nHoje é terça-feira, dia de assistir WandaVision")
        pare
      caso 4:
        escreva("\nHoje é quarta-feira, dia de Riverdale")
        pare
      caso 5:
        escreva("\nHoje é quinta-feira, dia de Supernatural")
        pare
      caso 6:
        escreva("\nHoje é sexta-feira, chegou o Falcão e o Soldado Invernal")
        pare
      caso 7:
        escreva("\nHoje é sábado, vamos ver The Walking Dead")
        pare
      caso contrario:
        escreva("\nDia da semana inválido")
        pare

      }
    }

    //CONVERSION CELSIUS A FAHRENHEIT
    funcao CONVERSOR()
{
  real celsius
  real fahrenheit
  inteiro opcao

  escreva("Conversor de Temperatura\n\n")

  escreva("1) Celsius para Fahrenheit\n")
  escreva("2) Fahrenheit para Celsius\n\n")

  leia(opcao)

  escolha(opcao)
  {
    caso 1:
      escreva("\nDigite o valor em Celsius (°C): ")
      leia(celsius)

      fahrenheit = (celsius * 1.8) + 32

      escreva("\n"+celsius+" °C equivale a "+fahrenheit+" °F")
      pare
    caso 2:
      escreva("\nDigite o valor em Fahrenheit (°F): ")
      leia(fahrenheit)

      celsius = (fahrenheit - 32) / 1.8

      escreva("\n"+fahrenheit+" °F equivale a "+celsius+" °C")
      pare
    caso contrario:
      escreva("\nOpção inválida")
      pare
    }
  }
}

 

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1546; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */