import BotaoFavorito from "./BotaoFavorito";

function ProdutoCard({ produto }) {
    return (
        <div className="produto-card">
            {/* Foto do produto que vem da API */}
            <img src={produto.images[0]} alt={produto.title} />
            {/* título do produto*/}
            <h3>{produto.title}</h3>
            {/* preço do produto*/ }
            <p className="preco">R$ {produto.price}</p>
            
            {/* botão favritar*/}
            <BotaoFavorito />

            {/* botão comprar independente */}
            <button className="botao-comprar">Comprar</button>  
        </div>
    );
}

export default ProdutoCard;