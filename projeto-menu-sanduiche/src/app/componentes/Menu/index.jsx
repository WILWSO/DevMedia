import estilos from './Menu.module.css';


export default function Menu () {
    return (
        <div className={estilos.menu}>
            <ul>
                <li>Opcion 1 </li>
                <li>Opcion 2 </li>
                <li>Opcion 3 </li>
                <li>Opcion 4 </li>
                <li>Opcion 5 </li>
            </ul>
        </div>
    )
}