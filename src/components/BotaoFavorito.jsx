import { useState } from "react";

function BotaoFavorito() {
    const [favorito, setFavorito] = useState(false);

    return (
        <button 
            className={`btn-favoritar ${favorito ? "ativo" : "neutro"}`}
            onClick={() => setFavorito(!favorito)}
        >
            {favorito ? "♥ Favoritado" : "♡ Favoritar"}
        </button>
    );
}
export default BotaoFavorito;