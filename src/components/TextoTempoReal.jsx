import { useState } from "react";

function TextoTempoReal() {
    const [texto, setTexto] = useState("");

    return (
        <div className="input-container">
            <h2 className="input-titulo">Texto em tempo real</h2>

            <input
                type="text"
                className="campo-texto"
                placeholder="Digite algo aqui:"
                value={texto}       //value diz o que o input mostra
                onChange={(e) => setTexto(e.target.value)}
            />
            {/* Se o texto não estiver vazio, ele renderiza de forma automatica*/}
            {texto && (
                <p className="resultado-texto">Você digitou: {texto}</p>
            )}
        </div>
    )
}
export default TextoTempoReal;