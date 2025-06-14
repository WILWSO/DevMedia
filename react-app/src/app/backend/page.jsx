import Link from 'next/link';
import estilos from "./backend.module.css";
import BtnRetonro from '@/componentes/buttons/BtnRetorno.jsx';

export default function Backend() {
    return (
        <>
            <div className={estilos.container_backend}>
                <h2>Node.js (Back-end)</h2>
                <p>
                    Node.js é uma plataforma de desenvolvimento que permite a execução de
                    código JavaScript no lado do servidor. Baseado no motor V8 do Google
                    Chrome, o Node.js é conhecido por sua eficiência e escalabilidade. Ele é
                    amplamente utilizado para construir aplicativos web, APIs e serviços em
                    tempo real. Com uma vasta gama de bibliotecas e um ecossistema robusto,
                    o Node.js é uma escolha popular para desenvolvedores que buscam criar
                    aplicativos rápidos e escaláveis.
                </p>
                <Link
                    href="https://www.devmedia.com.br/carreira-programador/?slug=back-end"
                    target="_blank"
                >
                    Guia de Back-end com Node.js
                </Link>
                <BtnRetonro />
            </div>
        </>
    );
}