import React,  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const { entrar } = useAuth();
    const navegar = useNavigate();

    async function aoEnviar(e) {
        e.preventDefault();
        setErro("");        //limpa erros antes de tentar

        const resultado = await entrar(usuario, senha);
        
        if (resultado.sucesso) {
            
            navegar("/minha-conta");
        } else {
            setErro(resultado.mensagem);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={aoEnviar} className="login-form">
                <h2>Acesse sua Conta</h2>

                <div className="form-grupo">
                    <label htmlFor="usuario">Usuário</label>
                    <input 
                        id="usuario"
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Usuário" />
                </div>
                <div className="form-grupo">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        id="senha"
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Senha" />
                </div>

                {erro && <p>{erro}</p>}

                <button type="submit" className="btn-sucesso">Entrar</button>
            </form>
        
        </div>
    );
}

export default Login;