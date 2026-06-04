import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/laptops")
        .then((res) => res.json())
        .then((dados) => {
            setProdutos(dados.products);
            setCarregando(false);
        })
        .catch(() => {
            setErro("Não foi possível carregar os produtos.");
            setCarregando(false);
        });
    }, []);

    if (carregando) return <p>Carregando produtos...</p>;
    if (erro) return <p>{erro}</p>;

    return (
        <section className="vitrine">
            
            {produtos.map((p) => (
                <ProdutoCard key={p.id} produto={p} />
            ))}
        </section>
    );
}

export default Vitrine;