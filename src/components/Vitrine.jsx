import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Vitrine() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [busca, setBusca] = useState("");

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

        // TESTE A: useEffect com o array vazio []
    useEffect(() => {
        console.log("%c[useEffect []] Fui disparado apenas UMA vez (quando a vitrine nasceu)!", "color: #3498db; font-weight: bold;");
    }, []);

    // TESTE B: useEffect com a dependência [busca]
    useEffect(() => {
        console.log(`%c[useEffect [busca]] Fui disparado! O texto atual da busca é: "${busca}"`, "color: #e67e22; font-weight: bold;");
    }, [busca]);

    // if de carregamento e erro vem depois de todos os hooks!
    if(carregando) return <p>Carregando produtos...</p>;
    if(erro) return <p>{erro}</p>;

    // lista com filtro 
    const filtrados = produtos.filter((p) =>
        p.title.toLowerCase().includes(busca.toLocaleLowerCase())
    );

    return (
        <section>
            <div>
                <input
                    type="text"
                    placeholder="Busque um produto para testar o useEffect."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>

            <div className="vitrine">
            {/* mapeando os filtrados(produtos)*/}
            {filtrados.map((p) => (
                <ProdutoCard key={p.id} produto={p} />
            ))}
            </div>
        </section>
    );
}

export default Vitrine;