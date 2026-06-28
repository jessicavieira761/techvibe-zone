import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Detalhe() {
    const { id } = useParams();   // pega o :id da URL
    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setCarregando(true);
        setErro(null);

        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Produto não encontrado ou falha na comunicação com o servidor.");
                }
                return res.json();
            })
            .then((dados) => {
                setProduto(dados);
                setCarregando(false);
            })
            .catch((err) => {
                setErro(err.message);
                setCarregando(false);
            });
}, [id]); //re-busca se o id mudar
    

if (carregando) return <p className="mensagem-carregando">Carregando detalhes do produto...</p>;

    if (erro) {
        return (
            <div className="erro-container">
                <p>Erro: {erro}</p>
                <Link to="/">Voltar para a Home</Link>
            </div>
        );
    }

    if (!produto) return <p>Produto não encontrado.</p>;

    return (
        <article className="detalhe">
            <h1>{produto.title}</h1>

            <div className="container-foto-detalhe">
                <img className="img-detalhe" src={produto.thumbnail} alt={produto.title} />
            </div>

            <p>{produto.description}</p>
            <p>Marca: {produto.brand}</p>
            <p>Avaliação: {produto.rating} ⭐</p>
            <p className="preco">R$ {produto.price}</p>
            <button onClick={() => navigate(-1)} className="btn-voltar">
                ← Voltar
            </button>
        </article>
    );
}

export default Detalhe;