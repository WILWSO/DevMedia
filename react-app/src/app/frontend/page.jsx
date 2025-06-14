import Link from 'next/link';
import estilos from './frontend.module.css';
import BtnRetonro from '@/componentes/buttons/BtnRetorno.jsx';

export default function Frontend() {
    return (
        <div className={estilos.container_frontend}>
            <h2>React.JS (front-end)</h2>
            <p> O React.js é uma biblioteca JavaScript utilizada para construir
                interfaces de usuário interativas e eficientes. Ele é amplamente adotado
                devido à sua abordagem baseada em componentes e à facilidade de criar
                aplicativos escaláveis. O React permite o desenvolvimento de Single Page
                Applications (SPAs) de forma eficiente e flexível.
            </p>            
            <Link
              href="https://www.devmedia.com.br/carreira-programador/?slug=front-end"
              target='_blank'
            >
              Guia de Front-end com Next.js 
            </Link>
            <BtnRetonro />
        </div>
    );
}