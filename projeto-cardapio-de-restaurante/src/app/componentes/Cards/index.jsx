import Image from 'next/image';
import estilos from './Cards.module.css';
import { estacaoAtual } from '@/app/servicos';


export default function Cards({ produto }) {

  // Formate o preço fora do JSX
  const precoFormatado = 
    typeof produto.preco === "number"
      ? produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : "";

  return (      
    <div className={estilos.container}>
      <figure>
        {produto.imagem && ( //se existir imagem, exibe
        <Image src={produto.imagem} alt={produto.nome}/>
        )}
      </figure>      
      <div className={estilos.container_informacoes}>
        <div>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <p>{produto.descricao}</p>
        </div>
        <div>
          <span>{precoFormatado}</span> {/*new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)} </span>*/}
        </div>        
        <div className={estilos.card_estacoes}>
          <p>
            {!produto.estacoes.includes(estacaoAtual()) && 'Produto não disponível nesta estação'}                    
          </p>
        </div>
      </div>
    </div>
  );
}