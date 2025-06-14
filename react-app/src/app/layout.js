import "./globals.css";
import Rodape from "@/componentes/rodape/Rodape";
import Topo from "@/componentes/topo/Topo.jsx";

export const metadata = {
  title: "Rotas com React",
  description: "Criando rotas com React usando Next.js",
  keywords: "React, Next.js, rotas, desenvolvimento web, front-end",
  robots: "index, follow",   
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-ar">
      <body> 
        <header>
          <Topo />
        </header>        
        <main>

          {children}

        </main>
        <footer>
         <Rodape /> 
        </footer>
      </body>
    </html>
  );
}

