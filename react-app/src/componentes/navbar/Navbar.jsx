'use client'
import { useState, useEffect } from 'react';
import estilos from './navbar.module.css'; // Importando o CSS Module
import Logo from '../logo/Logo';
import NavLinks from './NavLinks';

// This component implements a responsive navigation bar with a logo and links.
// It includes a toggle button for mobile view and changes styles on scroll.

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Efeito para adicionar classe ao navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [menuOpen]);

  return (
    <>
      <header className={`${estilos.navbar} ${scrolled ? estilos.scrolled : ''}`}>
        <Logo />
        <button
          className={`${estilos.menu-toggle} ${menuOpen ? estilos.open : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir/cerrar menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${estilos['nav-links']} ${menuOpen ? estilos.open : ''}`}>
          <NavLinks />
        </nav>
      </header>
      {menuOpen && <div className={estilos.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;

{/*
export default function Navbar() {
    return (
        <header className={estilos.container_topo}> 
            <h1> Conectados</h1>
            <nav>      
                <Logo className={estilos.navbar} />     
                <Link className={estilos.link_frontend} href="/frontend">Front-end</Link>
                <Link className={estilos.link_backend} href="/backend">Back-end</Link>
                <Link className={estilos.link_mobile} href="/mobile">Mobile</Link>  
                <Link className={estilos.link_bingo} href="/pageBingo">Bingo</Link>       
            </nav>
        </header>
    )
};
*/}