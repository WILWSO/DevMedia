'use client'
import { useState } from 'react'
import estilos from "./page.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Menu from './componentes/Menu';

export default function Home() {
 
  const [menuAberto, setMenuAberto] = useState(false)
 
  function atualizarMenu () {
    setMenuAberto(!menuAberto)
  }
  
  return (
    <div >
      <main className={estilos.container}>
        <header className={estilos.topo}>
          <button className={estilos.botao} onClick={atualizarMenu}>
            {menuAberto ? <IoMdClose /> : <CiMenuBurger />} 
          </button>          
        </header>
        {menuAberto && //if ternário versão resumida verifica se o valor atual do state é true, se for, exibe o menu 
        (<Menu /> )}
      </main>
    </div>
  );
}
