import Image from 'next/image';
import estilos from "./Categorias.module.css";

import icone1 from "/public/entrada.png";
import icone2 from "/public/massa.png";
import icone3 from "/public/carne.png";
import icone4 from "/public/bebidas.png";
import icone5 from "/public/salada.png";
import icone6 from "/public/sobremesa.png";
import icone7 from "/public/tipicas4.png";

export default function Categorias({ aoClicarCategoria, botaoClicado }) {
  return (
    <section className={estilos.secao_categorias}>
      <div className={estilos.container_botoes}>
        <button className={botaoClicado === "Entradas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Entradas")}>
          <Image className={estilos.icone} src={icone1} alt="ícone" />
          <span>Entradas</span>
        </button>

        <button className={botaoClicado === "Massas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Massas")}>
          <Image className={estilos.icone} src={icone2} alt="ícone" />
          <span>Massas</span>
        </button>

        <button className={botaoClicado === "Carnes" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Carnes")}>
          <Image className={estilos.icone} src={icone3} alt="ícone" />
          <span>Carnes</span>
        </button>
        <button className={botaoClicado === "Bebidas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Bebidas")}>
          <Image className={estilos.icone} src={icone4} alt="ícone" />
          <span>Bebidas</span>
        </button>
        <button className={botaoClicado === "Saladas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Saladas")}>
          <Image className={estilos.icone} src={icone5} alt="ícone" />
          <span>Saladas</span>
        </button>
        <button className={botaoClicado === "Sobremesas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Sobremesas")}>
          <Image className={estilos.icone} src={icone6} alt="ícone" />
          <span>Sobremesas</span>
        </button>
         <button className={botaoClicado === "Tipicas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => aoClicarCategoria("Tipicas")}>
          <Image className={estilos.icone} src={icone7} alt="ícone" />
          <span>Típicas</span>
        </button>
      </div>
    </section>
  );
}