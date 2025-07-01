import "./globals.css";


export const metadata = {
  title: "RESTAURANT",
  description: "De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados",
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
