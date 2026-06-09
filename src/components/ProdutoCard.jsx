import BotaoFavorito from "./BotaoFavorito";

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
            <button className="btn-custom btn-sucesso">Comprar</button>  
        </div>
    );
}

export default ProdutoCard;