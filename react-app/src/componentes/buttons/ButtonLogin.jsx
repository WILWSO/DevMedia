'use client';
import estiloButtons from './buttons.module.css';
import { useState } from 'react';


export default function ButtonLogin() {
    const [isLogin, setIsLogin] = useState(false);
    const [labelButton, setLabelButton] = useState("Faça login para acessar o sistema");

    const login = () => {
        setIsLogin(true), setLabelButton("Você está logado no sistema");
    };
    const logout = () => {
        setIsLogin(false), setLabelButton("Faça login para acessar o sistema");
    };
    
    return (       
        <div className={estiloButtons.button_container}>
            {isLogin 
            ? ( <button className={estiloButtons.button_logout} onClick={logout}> Logout </button>) 
            : ( <button className={estiloButtons.button_login} onClick={login}> Login </button>       
            )}
            <p className={estiloButtons.textLabel_Btnlogin}>{labelButton}</p>
        </div>      
    );
}


