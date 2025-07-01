import estilos from './Estacoes.module.css';

export default function Estacoes({ estacoes=[], aoClicarEstacao=[], botaoEstacao }) { // Componente funcional que recebe Array´s estacoes, estacoesSelecionadas e aoSelecionarEstacoes como props 
  return ( // estacoes = [] significa um valor padrão para evitar erro
    <div className={estilos.secao_estacoes}>
      <div className={estilos.container_botoes}> 
        {estacoes.map((estacao, index) => ( // Mapeia o array de estacoes e cria um botão para cada estacao
          <button key={index} className={botaoEstacao === estacao ? estilos.acenderBtn : estilos.apagarBtn} // Define a classe do botão com base na estacao selecionada
            onClick={() => aoClicarEstacao(estacao)}> 
            <span>{estacao}</span> 
          </button>
        ))}
       {/*
        <button className={botaoEstacao === estacoes[0] ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarEstacao(estacoes[0])}>         
          <span>Primavera</span>
        </button>
        <button className={botaoEstacao === estacoes[1] ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarEstacao(estacoes[1])}>         
          <span>Verão</span>
        </button>
        <button className={botaoEstacao === estacoes[2] ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarEstacao(estacoes[2])}>         
          <span>Outono</span>
        </button>
        <button className={botaoEstacao === estacoes[3] ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarEstacao(estacoes[3])}>         
          <span>Inverno</span>
        </button>  
        */}
      </div>      
    </div>
  );
}