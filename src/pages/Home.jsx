import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";
import "./Home.css";

function Vitrine() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [busca, setBusca] = useState("");
    const [categoria, setCategoria] = useState("laptops");

    useEffect(() => {
        setCarregando(true);        //ativando o carregamento
        fetch(`https://dummyjson.com/products/category/${categoria}`)
            .then((res) => res.json())
            .then((dados) => {
                setProdutos(dados.products);
                setCarregando(false);
            })
            .catch(() => {
                setErro("Não foi possível carregar os produtos.");
                setCarregando(false);
            });
    }, [categoria]);        //adicionei categoria como dependencia

    // if de carregamento e erro antes do retorno principal!
    if(carregando) return <p>Carregando produtos...</p>;
    if(erro) return <p>{erro}</p>;

    // lista com filtro 
    const filtrados = produtos.filter((p) =>
        p.title.toLowerCase().includes(busca.toLocaleLowerCase())
    );

    return (
        <section className="vitrine-container">

            <div className="filtros-secao">

                <div className="filtro-grupo">
                    <label htmlFor="categoria-select" className="filtro-label">
                        Categoria:
                    </label>
                    <select
                        id="categoria-select"
                        className="select-categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="laptops">💻 Notebooks</option>
                        <option value="smartphones">📱 Celulares</option>
                    </select>
                </div>

                {/* campo de busca */}
                <div className="busca-wrapper">
                    <input
                        type="text"
                        className="campo-busca-vitrine"
                        placeholder="Buscar..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                    <span className="icone-lupa">🔍</span>
                </div>
            </div>

            {/* grid de renderização dos cards */}
            <div className="vitrine-grid">
                {filtrados.map((p) => (
                    <ProdutoCard key={p.id} produto={p} />
                ))}
            </div> 
        </section>
    );
}

export default Vitrine;