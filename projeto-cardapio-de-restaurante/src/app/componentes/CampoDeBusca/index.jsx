import estilos from './CampoDeBusca.module.css';
import Image from 'next/image';
import Lupa from '../../../../public/Lupa.png';

export default function CampoDeBusca({ textoBusca, aoDigitar }) {
  return (
    <div className={estilos.container}>
      <Image className={estilos.icone} src={Lupa} alt="Ícone de busca" />
      <input
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        value={textoBusca}
        onChange={(evento) => aoDigitar(evento.target.value)}
      />
    </div>
  );
}