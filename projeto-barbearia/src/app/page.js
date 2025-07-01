import estilos from "./page.module.css";

export default function Home() {
  return (
  // <div className={ehTemaEscuro ? estilos.modo_escuro : estilos.modo_claro}> 
      <div className={estilos.page}>
        <main className={estilos.main}>
        <h1>Porjeto da Barbearia (que usa o AppRouter)</h1>
        </main>
        <footer className={estilos.footer}>
          
        </footer>
      </div>
   // </div>  
  );
}
