'use client';
import estiloButtons from './buttons.module.css';
import { useState } from 'react';

export default function ButtonNumAleatorio() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);

    const gerarNumeroAleatorio = () => {
        const numeroSorteado = Math.floor(Math.random() * 100) + 1;
        setNumeroAleatorio(numeroSorteado);
        // alert(`Número aleatório gerado: ${numeroAleatorio}`);
    };
    return (
        <div className={estiloButtons.button_container}>
            <button className={estiloButtons.button_logout} onClick={gerarNumeroAleatorio}>
                Gerar Número Aleatório
            </button>
            <h2> --: {numeroAleatorio} :-- </h2>
        </div>
    );
}