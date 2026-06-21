import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // inicia lendo o localStorage (mantém a sessão ao recarregar)
    const [logado, setLogado] = useState(
        () => localStorage.getItem("logado") === "true"
    );

    function entrar() {
        setLogado(true);
        localStorage.setItem("logado", "true");
    }
    function sair() {
        setLogado(false);
        localStorage.removeItem("logado");
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