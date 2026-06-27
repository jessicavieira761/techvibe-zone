import React from "react";
import { NavLink } from "react-router-dom";    //importa o Link
import { useAuth } from "./contexts/AuthContext";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import "../App.css";

function Layout({ children }) {
    const { logado, sair} = useAuth();

    return (
        <div className="layout-wrapper">
            <div className="conteudo-responsivo">

                <Cabecalho titulo="TechVibe Zone" /> 

                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/sobre">Sobre</NavLink>
                    
                    {logado && <NavLink to="/minha-conta">Minha Conta</NavLink>}
                </nav>

                <main>
                    {children}
                </main>
            </div>

            <Rodape />
            
        </div>
    );
}

export default Layout;