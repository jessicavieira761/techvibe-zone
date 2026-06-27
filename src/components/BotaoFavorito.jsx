import { useState } from "react";

function BotaoFavorito() {
    const [favorito, setFavorito] = useState(false);

    const alternarFavorito = () => {
        setFavorito(!favorito);
    };

    return (
        <button 
            className={`btn-favorito-custom ${favorito ? "is-favorito" : ""}`}
            onClick={alternarFavorito}
        >
            <span>{favorito ? "♥" : "♡"}</span>
            {favorito ? "Favorito" : "Favoritar"}      
        </button>
    );
}
export default BotaoFavorito;