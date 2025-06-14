import React from 'react';
import estilos from './buttons.module.css';


 export default function BtnSortearNumero({ props }) {
    return ( // Componente funcional que recebe uma função 'props' como propriedade
        // Renderiza um botão que chama a função passada como propriedade ao ser clicado no componente BINGO
        <div className={estilos.button_container}>
            <button className={estilos.button_logout} onClick={props}> {/* Chama a função sortearNumero ao clicar no botão */}
            Sortear Número
            </button>
        </div>
    ); 
}
