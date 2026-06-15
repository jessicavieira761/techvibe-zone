import { NavLink } from "react-router-dom";    //importa o Link
import React from "react";
import "../App.css";

function Layout({ children }) {
    return (
        <div className="layout-wrapper">
            <div className="conteudo-responsivo">
                <header className="cabecalho-tech">
                    <h1>TechVibe Zone</h1>
                    <span className="subtitulo">Sua vitrine de hardware</span>  

                    {/* menu de navegação */}
                    <nav style={{marginTop: "10px"}}>
                        <NavLink to="/" end>Home</NavLink>
                        <NavLink to="/sobre">Sobre</NavLink>
                        <NavLink to="/vitrine">Vitrine</NavLink>
                    </nav>
                </header>

                <main>
                    {children}
                </main>
            </div>

            <footer className="rodape-tech">
                <div>@ 2026 - Desenvovido por Jéssica Vieira</div>
                <div className="creditos">IFES -Instituto Federal do Espírito Santo | TADS</div>
            </footer>
            
        </div>
    );
}

export default Layout;