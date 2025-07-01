'use client'
import estilos from "./page.module.css";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Home() {

  const [temaEscuro, setTemaEscuro] = useState(false);
  
  function alternarTema() {
    setTemaEscuro (!temaEscuro)
  };

  return (
  <div className={temaEscuro ? estilos.dark_mode : estilos.light_mode}>
    <header className={estilos.header_container}>
      <h1>Coffe shop</h1>
      <button onClick={alternarTema}>
        {temaEscuro ? <BsSun className={estilos.light_icon}/> : <BsMoon />}
      </button>
    </header>

    <main className={estilos.main_container}>
      <div>
        <h2>A melhor cafeteria do Brasil!</h2>
        <p>Venha conhecer a melhor cafeteria do Brasil localizada no coração de São Paulo. Oferecemos cafés artesanais de alta qualidade e um ambiente acolhedor para você relaxar e aproveitar o melhor da vida. Nossa equipe é apaixonada por café e está sempre pronta para oferecer a melhor experiência possível.
          Desfrute nossas bebidas exclusivas e deliciosos acompanhamentos enquanto relaxa em um espaço único. Esperamos por você para uma experiêmcia inesquecível.
        </p>
        <button>Nossas Lojas</button>
      </div>
    </main>
  </div> 
  );
}
