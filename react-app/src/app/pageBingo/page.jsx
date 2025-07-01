import Bingo from '@/componentes/bingo/Bingo.jsx'; // Importando o componente Bingo
import BtnRetorno from '@/componentes/buttons/BtnRetorno';
import estilos from './pageBingo.module.css'; // Importando o CSS específico para a página

export default function PageBingo() {
    return (
        <div className={estilos.container_pageBingo}>
            <h2>bingo </h2>  
            <Bingo />  {/* chama o componente Bingo */}
            <BtnRetorno /> {/* Botão de retorno para a página inicial */}           
        </div>
    );
}