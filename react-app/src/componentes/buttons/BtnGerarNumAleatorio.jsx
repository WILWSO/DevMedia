'use client';
import estilos from './buttons.module.css';
import { useState } from 'react';

export default function BtnGerarNumAleatorio() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
    const [girando, setGirando] = useState(false);

    const gerarNumeroAleatorio = () => {
        setGirando(true);
        let intervalo;
        intervalo = setInterval(() => {
            setNumeroAleatorio(Math.floor(Math.random() * 100) + 1);
        }, 50); // muda o número a cada 50ms

        setTimeout(() => {
            clearInterval(intervalo);
            const numeroSorteado = Math.floor(Math.random() * 100) + 1;
            setNumeroAleatorio(numeroSorteado);
            setGirando(false);
        }, 2000); // gira por 2 segundos
    };

    return (
        <div className={estilos.button_container}>
            <button
                className={estilos.button_logout}
                onClick={gerarNumeroAleatorio}
                disabled={girando}
            >
                Gerar Número Aleatório
            </button>
            <h2> --: {numeroAleatorio} :-- </h2>
        </div>
    );
}