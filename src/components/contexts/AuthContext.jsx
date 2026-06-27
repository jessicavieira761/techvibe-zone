import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // inicia lendo o localStorage (mantém a sessão ao recarregar)
    const [logado, setLogado] = useState(
        () => localStorage.getItem("logado") === "true"
    );

    const entrar = async (username, password) => {
        try {
            const resposta = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username,     //'emilys'
                    password: password,     //emilypass
                })
            });

            // se reposta for 200
            if (resposta.ok) {
                const dados = await resposta.json();

                // salvando o token que vem da API
                localStorage.setItem("logado", "true");
                localStorage.setItem("token", dados.accessToken);

                setLogado(true);
                return {sucesso: true};
            } else {
                // avisa se usuario ou senha estiveremm errados
                return {sucesso: false, mensagem: "Usuário ou senha inválidos!"};
            }
        } catch (error) {
            console.error("Erro na autenticação:", error);
            return{ sucesso:false, mensagem:"Erro de conexão com o servidor."};
        }
    };
    
    function sair() {
        setLogado(false);
        localStorage.removeItem("logado");
        localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ logado, entrar, sair }}>
            {children}
        </AuthContext.Provider>
    );
}

// atalho para usar o contexto: const { logado } = useAuth();
export function useAuth() {
    return useContext(AuthContext);
}
