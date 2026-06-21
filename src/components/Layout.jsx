import React from "react";
import { NavLink } from "react-router-dom";    //importa o Link
import { useAuth } from "./contexts/AuthContext";
import Cabecalho from "./Cabecalho";

import "../App.css";

function Layout({ children }) {
    const { logado, sair} = useAuth();

    return (
        <div className="layout-wrapper">
            <div className="conteudo-responsivo">

                <Cabecalho titulo="TechVibe Zone" /> 

                {/* menu de navegação */}
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/sobre">Sobre</NavLink>
                    <NavLink to="/vitrine">Vitrine</NavLink>
                    {logado && <NavLink to="/minha-conta">Minha Conta</NavLink>}
                </nav>

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