import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function Cabecalho({ titulo }) {
    //controle de visualização
    const { logado, sair } = useAuth();

    return (
        <header className="cabecalho-tech">
            <div className="logo-area">
                <h1>{titulo}</h1>
                <span className="subtitulo">Sua vitrine de hardware</span>
            </div>

            <div className="auth-area">
                {logado ? (
                    <button onClick={sair} className="btn-auth">Sair</button>
                ) : (
                    <button onClick={() => Navigate('/login')} className="btn-auth">Entrar</button>
                )}
            </div>
        </header>
    );
}

export default Cabecalho;