import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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

    if (carregando) return <p>Carregando...</p>;

    return (
        <article className="detalhe">
            <Link to="/">← Voltar</Link>
            <h1>{produto.title}</h1>
            <img src={produto.thumbnail} alt={produto.title} />
            <p>R$ {produto.description}</p>
            <p className="preco">R$ {produto.price}</p>
        </article>
    );
}

export default Detalhe;