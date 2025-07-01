import Image from 'next/image'
import estilos from './Topo.module.css'
import Logo from '../../../../public/logo.png'
import iconeSol from '../../../../public/sun.png'
import iconeLua from '../../../../public/moon.png'

export default function Topo (props) {
    return (
        <header className={props.ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
            <Image className={estilos.logo} src={Logo} alt='logomarca' />
            <button onClick={props.acao_onclick} className={props.ehTemaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>  
                <Image className={estilos.iconesBtn} src={props.ehTemaEscuro ? iconeSol : iconeLua} alt='icone' />    
            </button>
        </header>
    )
}