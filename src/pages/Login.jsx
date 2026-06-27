import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";
import Botao from "../components/Botao";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const { entrar } = useAuth();
    const navegar = useNavigate();

    async function aoEnviar(e) {
        e.preventDefault();
        setErro(""); 

        const resultado = await entrar(usuario, senha);
        
        if (resultado.sucesso) {
            navegar("/minha-conta");
        } else {
            setErro(resultado.mensagem);
        }
    }

    return (
        <div className="conteudo-responsivo">
           
            <form onSubmit={aoEnviar}>
                <h2>Acesse sua Conta</h2>

                    <div className="campo-formulario">
                    <label htmlFor="usuario">Usuário</label>
                    <input 
                        id="usuario"
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>

                <div className="campo-formulario">
                    <label htmlFor="senha">Senha</label>
                    <input 
                        id="senha"
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className={erro ? "input-com-erro" : ""} 
                    />

                    {erro && <span className="msg-erro-login">Usuário ou senha inválidos</span>}
                </div>

                <div className="container-botao">
                    <Botao type="submit" texto="Entrar" variante="primario" />
                </div>
            </form>
        </div>
    );
}

export default Login;