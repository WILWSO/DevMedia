'use client';
import { useState, useEffect } from 'react';
import estilos from '../buttons/buttons.module.css';
import estilosBingo from './bingo.module.css';
import BtnSortearNumero from '../buttons/BtnSortearNumero';

export default function TabelaBingo() {
  // Recupera do localStorage ao carregar a página
  const [numerosSorteados, setNumerosSorteados] = useState(() => {
    const saved = localStorage.getItem('numerosSorteados');
    return saved ? JSON.parse(saved) : [];
  });
  const [girando, setGirando] = useState(false); // controla se a bolinha está girando
  const [numeroBolinha, setNumeroBolinha] = useState(0); // inicia a bolinha em 00

  // Salva no localStorage sempre que os números sorteados mudarem
  useEffect(() => {
    localStorage.setItem('numerosSorteados', JSON.stringify(numerosSorteados));
  }, [numerosSorteados]);

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

    setGirando(true); // inicia a animação da bolinha
    let intervalo = setInterval(() => {
      setNumeroBolinha(Math.floor(Math.random() * 100) + 1); // mostra números aleatórios enquanto gira
    }, 50); 

    setTimeout(() => {
      clearInterval(intervalo);
      const indice = Math.floor //Arredonda o número para baixo até o inteiro mais próximo.
        (Math.random() * numerosRestantes.length); // (.random) Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo) e multiplica o número aleatório pelo tamanho do array numerosRestantes. Se numerosRestantes.length for 10, o resultado estará entre 0 e 9.999... Resumo: sorteia um número aleatório do array de 'numerosRestantes' Gera um índice inteiro aleatório válido para acessar um elemento do array
      const numeroSorteado = numerosRestantes[indice]; //Pega o número sorteado usando o índice aleatório gerado acima. Por exemplo, se o índice for 3, pega o quarto número do array numerosRestantes.
      setNumeroBolinha(numeroSorteado); // exibe o número sorteado na bolinha
      setNumerosSorteados([...numerosSorteados, numeroSorteado]); //Atualiza o estado 'numerosSorteados' adicionando o novo número sorteado. O operador spread (...) cria uma cópia do array 'numerosSorteados' e adiciona o novo número no final. Isso garante que o estado seja atualizado corretamente e o componente seja re-renderizado com os números sorteados atualizados.
      setGirando(false); // para a animação
    }, 2000); // gira por 2 segundos
  };

  // Função para zerar o sorteio e limpar o localStorage
  const zerarSorteio = () => {
    setNumerosSorteados([]); // Limpa o array de números sorteados
    setNumeroBolinha(0); // Reseta a bolinha para 00
    localStorage.removeItem('numerosSorteados'); // Remove do localStorage
  };

  const ultimoSorteado = numerosSorteados[numerosSorteados.length - 1]; //Pega o último número sorteado, acessando o último elemento do array 'numerosSorteados' usando 'numerosSorteados.length - 1'.
  const penultimoSorteado = numerosSorteados[numerosSorteados.length - 2]; //Pega o penúltimo número sorteado, acessando o penúltimo elemento do array 'numerosSorteados' usando 'numerosSorteados.length - 2'.

  return ( 
    <section>
      {/* Container dos botões, apenas o botão sortear número aqui */}
      <div>
        <BtnSortearNumero props={sortearNumero}/> {/* Chama o componente BtnSortearNumero e passa a função sortearNumero como props */}
      </div>

      {/* Bolinha do bingo girando acima do grid */}
      <div className={estilosBingo.bolinha_container}>
        <div
          className={`${estilosBingo.bolinha} ${girando ? estilosBingo.girando : ''}`}
        >
          <span className={estilosBingo.numero_bolinha}>
            {numeroBolinha !== null ? numeroBolinha.toString().padStart(2, '0') : '00'}  {/* Exibe o número da bolinha, formatado com dois dígitos */}
          </span>
        </div>
      </div>

      <div className={estilosBingo.container}>     
        <div className={estilosBingo.grid}> {/* Cria uma grade para exibir os números sorteados */}
          {Array.from({ length: 100 }, (_, i) => i + 1).map(numero => { // Cria um array de números de 1 a 100 e mapeia cada número para um elemento JSX
            // A função Array.from cria um array de 100 elementos, onde cada elemento é o índice + 1 (ou seja, de 1 a 100).
            let cor = estilosBingo.numero;
            if (numerosSorteados.includes(numero)) // verifica se o número já foi sorteado
            { 
              if (numero === ultimoSorteado) { //verifica se o número é o último sorteado
                cor = `${estilosBingo.numero} ${estilosBingo.ultimo_numero}`; // se for, adiciona a classe 'ultimo_numero' para estilização
              } else if (numero === penultimoSorteado) { //verifica se o número é o penúltimo sorteado
                cor = `${estilosBingo.numero} ${estilosBingo.penultimo_numero}`; // se for, adiciona a classe 'penultimo_numero' para estilização
              } else {
                cor = `${estilosBingo.numero} ${estilosBingo.numero_sorteado}`; // se não for nem o último nem o penúltimo, adiciona a classe 'numero_sorteado' para estilização
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

      {/* Botão para zerar o sorteio agora abaixo do grid */}
      <div className={estilos.button_container} style={{ justifyContent: 'center', marginTop: 24 }}>
        <button 
          className={estilos.button_zerar}
          onClick={zerarSorteio}
        >
          Zerar Sorteio
        </button>
      </div>
    </section>
  );
}