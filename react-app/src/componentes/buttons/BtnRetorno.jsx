import Link from 'next/link';
import estilos from'./buttons.module.css'; // Importando o CSS para estilização do botão

export default function BtnRetorno({}) {
    return (  
        <div className={estilos.button_container}>    
            <Link className={estilos.BtnRetorno}    
                href="/"
            >  Voltar
            </Link>
         </div>   
    );
}