'use client';
import { useState } from 'react';
import estilos from '../buttons/buttons.module.css';
import estilosBingo from './bingo.module.css';
import BtnSortearNumero from '../buttons/BtnSortearNumero';

export default function TabelaBingo() {
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumero = () => {//função para sortear um número aleatório de 1 a 100 que ainda não foi sorteado.
    const numerosRestantes = Array //vai guardar um array com todos os números de 1 a 100 que ainda não foram sorteados.
      .from({ length: 100 }, //.from possui 3 parametros mas usamos só 2: O 1º é um objeto { length: 100 } cria um array com 100 posições (índices 0, 1, 2, 3).
      (_, i) => i + 1) //O 2º é uma arrow function chamada para cada elemento, com dois parâmetros: O primeiro parâmetro (_) representa o valor atual do elemento (mas não é usado aqui, por isso só um underline). O segundo parâmetro (i) é o índice do elemento no array (começa em 0). A função retorna i + 1, ou seja: Para o índice 0, retorna 1; Para o índice 1, retorna 2; Para o índice 2, retorna 3; ... e assim por diante até 100
      .filter(n => !numerosSorteados //.filter() percorre todos os números de 1 a 100. Para cada número, verifica se ele não está em 'numerosSorteados' usando .includes() e cria um no novo array com os números que ainda não foram sorteados.
        .includes(n)); //O método .includes() verifica se o valor 'n' existe dentro do array 'numerosSorteados' e retorna 'true' se encontrar, 'false' caso contrário. 
    
    if (numerosRestantes.length === 0) { //verifica se ainda tem números que não foram sorteados.
      alert('Todos os números já foram sorteados!');
      return;
    }
    const indice = Math.floor //Arredonda o número para baixo até o inteiro mais próximo.
      (Math.random() * numerosRestantes.length); // (.random) Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo) e multiplica o número aleatório pelo tamanho do array numerosRestantes. Se numerosRestantes.length for 10, o resultado estará entre 0 e 9.999... Resumo: sorteia um número aleatório do array de 'numerosRestantes' Gera um índice inteiro aleatório válido para acessar um elemento do array
    const numeroSorteado = numerosRestantes[indice]; //Pega o número sorteado usando o índice aleatório gerado acima. Por exemplo, se o índice for 3, pega o quarto número do array numerosRestantes.
    setNumerosSorteados([...numerosSorteados, numeroSorteado]); //Atualiza o estado 'numerosSorteados' adicionando o novo número sorteado. O operador spread (...) cria uma cópia do array 'numerosSorteados' e adiciona o novo número no final. Isso garante que o estado seja atualizado corretamente e o componente seja re-renderizado com os números sorteados atualizados.
  };

  const ultimoSorteado = numerosSorteados[numerosSorteados.length - 1]; //Pega o último número sorteado, acessando o último elemento do array 'numerosSorteados' usando 'numerosSorteados.length - 1'.
  const penultimoSorteado = numerosSorteados[numerosSorteados.length - 2]; //Pega o penúltimo número sorteado, acessando o penúltimo elemento do array 'numerosSorteados' usando 'numerosSorteados.length - 2'.

  return ( 
    <section>
      <div className={estilos.button_container}> 
        <BtnSortearNumero props={sortearNumero}/> {/* Chama o componente BtnSortearNumero e passa a função sortearNumero como props */}
     </div> {/* componentizando o botão por meio de PROPS */}  
         {/* <div className={estiloBtn.button_container}> 
              <button className={estiloBtn.button_logout} onClick={sortearNumero}> Chama a função sortearNumero ao clicar no botão 
              Sortear Número
              </button> 
            </div> */}
      <div className={estilosBingo.container}>     
        <div className={estilosBingo.grid}> {/* Cria uma grade para exibir os números sorteados */}
          {Array.from({ length: 100 }, (_, i) => i + 1).map(numero => { // Cria um array de números de 1 a 100 e mapeia cada número para um elemento JSX
            // A função Array.from cria um array de 100 elementos, onde cada elemento é o índice + 1 (ou seja, de 1 a 100).
            let cor = estilosBingo.numero;
            if (numerosSorteados.includes(numero)) // verifica se o número já foi sorteado
            { 
              if (numero === ultimoSorteado) { //verifica se o número é o último sorteado
                cor = `${estilosBingo.numero} ${estilosBingo.ultimo}`; // se for, adiciona a classe 'ultimo' para estilização
              } else if (numero === penultimoSorteado) { //verifica se o número é o penúltimo sorteado
                cor = `${estilosBingo.numero} ${estilosBingo.penultimo}`; // se for, adiciona a classe 'penultimo' para estilização
              } else {
                cor = `${estilosBingo.numero} ${estilosBingo.sorteado}`; // se não for nem o último nem o penúltimo, adiciona a classe 'sorteado' para estilização
              }
            }
            return (
              <div key={numero} className={cor}>  {/* A cor é definida com base no estado do número */}
                {numero} {/* Exibe o número dentro da div */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}