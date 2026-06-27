import BotaoFavorito from "./BotaoFavorito";
import { Link } from "react-router-dom";
import Botao from "./Botao";

function ProdutoCard({ produto }) {
    return (
        <div className="tech-card">
            <div className="container-foto">
            {/* Foto do produto que vem da API */}
            <img src={produto.thumbnail} alt={produto.title} />
            </div>

            {/* título do produto */}
            <h3 className="card-titulo">{produto.title}</h3>
            {/* preço do produto*/ }
            <p className="preco">R$ {produto.price}</p>
            
            {/* botão favoritar */}
            <div className="card-badge-area">
            <BotaoFavorito />
            </div>

            {/* botão comprar independente */}
            <Botao texto="Comprar" variante="primario" /> 

            {/* link para detallhes */} 
            <Link to={`/produto/${produto.id}`} >
                <Botao texto="Ver detalhes" variante="secundario" />
            </Link>
        </div>
    );
}

export default ProdutoCard;