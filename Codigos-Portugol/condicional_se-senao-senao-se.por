programa
{

  funcao inicio()
  {
    cadeia meteoros_trimestre_um =  "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\n"
    cadeia meteoros_trimestre_dois =  "Líridas começa em 23/05 e termina em 26/05\nBootídeos de Junho começa em 16/06 e termina em 20/06\n"
    cadeia meteoros_trimestre_tres =  "Alfa Capricornídeos começa em 13/09 e termina em 17/09\nEta Líridas começa em 19/08 e termina em 22/08\n"
    cadeia meteoros_trimestre_quatro =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\n"

    inteiro mes_atual

    escreva("Informe o mês atual: ")
    leia(mes_atual)

    se(mes_atual == 1 ou mes_atual == 2 ou mes_atual == 3) {
      escreva("\nAs chuvas de meteoros do primeiro trimestre são:\n\n"+meteoros_trimestre_um)
    }
    senao se(mes_atual == 4 ou mes_atual == 5 ou mes_atual == 6) {
      escreva("\nAs chuvas de meteoros do segundo trimestre são:\n\n"+meteoros_trimestre_dois)
    }
    senao se(mes_atual == 7 ou mes_atual == 8 ou mes_atual == 9) {
      escreva("\nAs chuvas de meteoros do terceiro trimestre são:\n\n"+meteoros_trimestre_tres)
    }
    senao se(mes_atual == 10 ou mes_atual == 11 ou mes_atual == 12) {
      escreva("\nAs chuvas de meteoros do quarto trimestre são:\n\n"+meteoros_trimestre_quatro)
    }
    senao {
      escreva("Nenhuma chuva de meteoro no período informado")

    }
  }

  //CALCULO DO IMC
  funcao IMC()
  {
    real peso
    real altura
    real imc

    escreva("Cálculo de IMC\n\n")

    escreva("Informe seu peso (em kg): ")
    leia(peso)

    escreva("Informe sua altura (em m): ")
    leia(altura)

    imc = peso / (altura * altura)

    escreva("Seu IMC é: "+imc+"\n")

    se(imc > 0 e imc < 17)
    {
      escreva("Muito abaixo do peso")
    }
    senao se (imc >= 17 e imc < 18.5)
    {
      escreva("Abaixo do peso")
    }
    senao se (imc >= 18.5 e imc < 25)
    {
      escreva("Peso normal")
    }
    senao se (imc >= 25 e imc < 30)
    {
      escreva("Acima do peso")
    }
    senao se (imc >= 30 e imc < 35)
    {
      escreva("Obesidade grau 1")
    }
    senao se (imc >= 35 e imc < 41)
    {
      escreva("Obesidade grau 2")
    }
    senao
    {
      escreva("Obesidade grau 3")
    }
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 27; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */