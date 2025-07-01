import Image from 'next/image';
import estilos from './logo.module.css'; // Importando o CSS do componente
import logotipo from '../../../public/UPJ_Logo1.png'


export default function Logo() {
    return (
        <nav className={estilos.navbar}>
            <div className={`${estilos.logo_conteudo}`}> 
                <Image src={logotipo} alt="Logo" />
                <span className={estilos.logo_text}>UPJ</span>
            </div>
        </nav>
    );
}
