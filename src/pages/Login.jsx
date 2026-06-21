import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const { entrar } = useAuth();
    const navegar = useNavigate();

    function aoEnviar(e) {
        e.preventDefault();
        // login SIMULADO: usuário e senha fixos
        if (usuario === "aluno" && senha === "1234") {
            entrar();
            navegar("/minha-conta");
        } else {
            setErro("Usuário ou senha inválidos.");
        }
    }

    return (
        <form onSubmit={aoEnviar}>
            <input value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuário" />
            <input type="password" value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha" />
            {erro && <p>{erro}</p>}
            <button type="submit">Entrar</button>
        </form>
    );
}

export default Login;