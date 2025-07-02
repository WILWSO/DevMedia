import "./globals.css";


export const metadata = {
  title: "WILTON´S RESTAURANT",
  description: "Restorant con los mejores pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
