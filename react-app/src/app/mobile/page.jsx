import Link from 'next/link';
import estilos from './mobile.module.css';
import BtnRetonro from '@/componentes/buttons/BtnRetorno.jsx';

export default function Mobile() {
    return (
        <div className={estilos.container_mobile}>
            <h2>React Native (Mobile)</h2>
            <p>
                React Native é uma biblioteca JavaScript desenvolvida pelo Facebook para
                criar aplicativos móveis nativos usando a mesma base de código. Ele
                permite que os desenvolvedores construam aplicativos para iOS e Android
                com uma experiência de usuário fluida e desempenho próximo ao nativo.
                Com uma vasta comunidade e ecossistema, o React Native é uma escolha
                popular para desenvolvimento móvel. <br /> <br />

                React Native é um framework de desenvolvimento de aplicativos móveis que
                permite a criação de aplicativos nativos usando JavaScript e React. Ele
                permite o desenvolvimento de aplicativos para iOS e Android usando uma
                base de código compartilhada, proporcionando uma experiência de
                desenvolvimento eficiente e rápida. Com React Native, os desenvolvedores
                podem criar aplicativos móveis robustos e de alto desempenho de forma
                simplificada.
            </p>
            <Link
                href="https://www.devmedia.com.br/carreira-programador/?slug=mobile"
                target="_blank"
            >
                Guia de Mobile com React Native
            </Link>
            <BtnRetonro />
        </div>
    );
}