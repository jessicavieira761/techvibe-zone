import Botao from "./Botao";
import Selo from "./Selo";

function ProdutoCard({ produto }) {
    // Desestruturação do objeto produto para deixar o código limpo
    const { nome, preco, imagem, freteGratis } = produto;

    // Formatação recomendada para exibir o preço em Real (R$)
    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return (
        <article className="tech-card">
            <div className="card-icone">{imagem}</div>
            <h3 className="card-titulo">{nome}</h3>
            <p className="card-preco">{precoFormatado}</p>
            
            <div className="card-badge-area">
                {/* Renderização condicional: o selo só aparece se for frete grátis */}
                {freteGratis && <Selo texto="Entrega Grátis" estilo="sucesso" />}
            </div>

            <Botao texto="Adicionar ao Carrinho" variante="sucesso" />
        </article>
    );
}

export default ProdutoCard;