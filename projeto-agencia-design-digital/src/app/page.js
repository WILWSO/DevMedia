'use client'
import estilos from "./page.module.css";
import { useState } from "react";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape"

export default function Home() {
  
  const [ehTemaEscuro, setTemaEscuro] = useState(false)  
  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro)  }

  return (
    <div className={estilos.page}>
      <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <main className={estilos.main}>
        <h1> HOME-MAIN <br/>
         Projeto Agencia de Design Digital</h1>
        <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
        <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro} />
      </main>
      <footer className={estilos.footer}>
        <Rodape ehTemaEscuro={ehTemaEscuro} />
      </footer>
    </div>
  );
}
