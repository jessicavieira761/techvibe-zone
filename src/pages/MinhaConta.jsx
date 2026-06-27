import React from 'react';
import { useAuth } from "../components/contexts/AuthContext";

function MinhaConta() {
    const {usuario} = useAuth();

    return (
        <div className='container-painel'>

            <div className='card-perfil'>
                <div className='avatar-usuario'>👤</div>
                <div className='info-perifl'>
                    <h2>Bem-vindo, {usuario || "Cliente TechVibe"}!</h2>
                    <p>Sua área restrita de hardware e tecnologia de ponta.</p>
                </div>
            </div>
            
            <div className="grid-atalhos-painel">
                <div className="card-atalho">
                    <div className="icone-atalho">❤️</div>
                    <h3>Meus Favoritos</h3>
                    <p>Gerencie seus notebooks e smartphones salvos.</p>
                </div>

                <div className="card-atalho">
                    <div className="icone-atalho">📦</div>
                    <h3>Meus Pedidos</h3>
                    <p>Acompanhe o status e o histórico de suas compras.</p>
                </div>

                <div className="card-atalho">
                    <div className="icone-atalho">⚙️</div>
                    <h3>Configurações</h3>
                    <p>Altere suas informações de perfil e segurança.</p>
                </div>
            </div>

        </div>
    );
}

export default MinhaConta;