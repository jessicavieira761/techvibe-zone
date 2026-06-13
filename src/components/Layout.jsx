import React from "react";
import { Link } from "react-router-dom";    //importa o Link
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
                        <Link to="/" style={{marginRight: "15px"}}>Home</Link>
                        <Link to="/sobre" style={{marginRight: "15px"}}>Sobre</Link>
                        <Link to="/vitrine" style={{marginRight: "15px"}}>Vitrine</Link>
                    </nav>
                </header>

                <main style={{ marginTop: "20px"}}>
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