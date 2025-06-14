import estilos from "./page.module.css";
import ButtonLogin from "@/componentes/buttons/ButtonLogin";
import ButtonNumAleatorio from "@/componentes/buttons/ButtonNumAleatorio";

export default function Home() {
  return (
    <div className={estilos.containerPagina}>
      <main className={estilos.main}>
        <h1>Seja bem vindo à sua primeira página em React</h1>        
        <section className={estilos.secaoBotoes}>
          <ButtonLogin />
          <ButtonNumAleatorio />
        </section>
      </main>      
    </div>
  );
}
