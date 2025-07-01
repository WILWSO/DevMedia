import estilos from "./page.module.css";
import ButtonLogin from "@/componentes/buttons/ButtonLogin";
import BtnGerarNumAleatorio from "@/componentes/buttons/BtnGerarNumAleatorio";
import Image from "next/image";

export default function Home() {
  return (
    <div className={estilos.containerPagina}>
      <main className={estilos.main}>
        <h1>Bienvenido al futuro </h1>     
        <Image
          className={estilos.imagem}
          src= "/UPJ_Logo1.png" alt="Logo UPJ" width={500} height={382} 
        />   
        <section className={estilos.secaoBotoes}>
          <ButtonLogin />
          <BtnGerarNumAleatorio />
        </section>
      </main>      
    </div>
  );
}
