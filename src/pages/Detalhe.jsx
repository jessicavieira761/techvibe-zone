import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Detalhe() {
    const { id } = useParams();   // pega o :id da URL
    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((dados) => {
                setProduto(dados);
                setCarregando(false);
            });
    }, [id]); // re-busca se o id mudar

    if (carregando) return <p>Carregando detalhes do produto...</p>;
    if (!produto) return <p>Produto não encontrado.</p>

    return (
        <article className="detalhe">
            <h1>{produto.title}</h1>
            <img src={produto.thumbnail} alt={produto.title} />
            <p>{produto.description}</p>
            <p>Marca: {produto.brand}</p>
            <p>Avaliação: {produto.rating} ⭐</p>
            <p className="preco">R$ {produto.price}</p>
            <Link to="/">← Voltar</Link>
        </article>
    );
}

export default Detalhe;