'use client';
import Image from "next/image";
import estilos from "./page.module.css";
import { useState } from "react";
import CampoDeBusca from "./componentes/CampoDeBusca";
import Banner from '../../public/banner.png';
import Categorias from './componentes/Categorias';
import './globals.css';
import { getProdutos, getProdutosPorCategoria, getEntradas, getProdutosPorEstacao } from "./servicos";
import Cards from "./componentes/Cards";
import Estacoes from "./componentes/Estacoes";


export default function Home() {
  
  const [dadosFiltrados, setDadosFiltrados] = useState(getEntradas); // Estado para armazenar os dados filtrados com base na categoria entradas
  const [textoBusca, setTextoBusca] = useState("");// Estado para armazenar o texto digitado no campo de busca
  const [botaoCategoria, setBotaoCategoria] = useState('Entradas'); // Estado para armazenar a categoria selecionada pelo botao
  const [botaoEstacao, setBotaoEstacao] = useState(""); // Estado para armazenar a estacao selecionada pelo botao
  const todasEstacoes = ["Primavera", "Verão", "Outono", "Inverno"]; // Define as estações do ano

  const aoDigitar = (textoDigitado) => { // Função para atualizar o estado do texto digitado
    setTextoBusca(textoDigitado); // Atualiza o estado do texto de busca com o texto digitado no campo de busca
    textoDigitado.length >= 3 ? setDadosFiltrados(getProdutos(textoDigitado)) : setDadosFiltrados(getEntradas); // se o texto digitado tem 3 ou mais caracteres entãp atualiza os dados filtrados com base no texto digitado, caso contrário, exibe todos os produtos de entrada padrão
    setBotaoCategoria(""); // Reseta o botão de categoria ao digitar no campo de busca
    setBotaoEstacao(""); // Reseta o botão de estacao ao digitar no campo de busca
  };

  const aoClicarCategoria = (categoria) => { // Função para atualizar o estado da categoria selecionada
    setTextoBusca(""); // Reseta o texto de busca ao clicar em uma categoria
    setBotaoEstacao(""); // Reseta o botão de estacao ao clicar em uma categoria
    setDadosFiltrados(getProdutosPorCategoria(categoria)); // Atualiza os dados filtrados com base na categoria selecionada
    setBotaoCategoria(categoria); // Atualiza o estado do botão de categoria com a categoria selecionada
  };

   const aoClicarEstacao = (estacao) => {
    setTextoBusca(""); // Reseta o texto de busca ao clicar em uma estacao
    setBotaoCategoria(""); // Reseta o botão de categoria ao clicar em uma estacao
    setDadosFiltrados(getProdutosPorEstacao(estacao)); // Atualiza os dados filtrados com base na estacao selecionada
    setBotaoEstacao(estacao); // Atualiza o estado do botão estacao com a estacao selecionada
  };
 
  return (
    <>
      <header className={estilos.topo}>
        <Image src={Banner} alt="Banner do Cardápio" />
        <div> 
          <h1>WILTON´S RESTAURANT</h1>
          <p>  De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>          
      <main className={estilos.container_principal}>
        <Estacoes estacoes={todasEstacoes} botaoEstacao={botaoEstacao} aoClicarEstacao={aoClicarEstacao}/>
        <Categorias botaoCategoria={botaoCategoria} aoClicarCategoria={aoClicarCategoria}/>
        <CampoDeBusca textoBusca={textoBusca} aoDigitar={aoDigitar} />
        <section className={estilos.secao_cards}>
          <h2>Cardápio</h2>
          <div className={estilos.container_cards}>           
            {
              dadosFiltrados.map((produto) => ( // Mapeia os dados filtrados e renderiza um Card para cada produto
              <Cards key={produto.id} produto={produto} /> // Passa o produto como prop para o componente Cards
            ))
            }
          </div>
        </section>
      </main>       
  </>
);
}  