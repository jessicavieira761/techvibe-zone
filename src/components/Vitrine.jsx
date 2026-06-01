import ProdutoCard from "./ProdutoCard";

// Array de produtos totalmente exclusivo com mais de 4 itens (Requisito obrigatório)
const bancoDeProdutos = [
    { id: 201, nome: "Notebook Ultra Slim", preco: 3899.90, imagem: "💻", freteGratis: true },
    { id: 202, nome: "Headset Gamer 7.1", preco: 249.90, imagem: "🎧", freteGratis: false },
    { id: 203, nome: "Teclado Mecânico Pro", preco: 399.00, imagem: "⌨️", freteGratis: true },
    { id: 204, nome: "Mouse Óptico Wireless", preco: 149.90, imagem: "🖱️", freteGratis: false },
];

function Vitrine() {
    return (
        <section className="vitrine-grid">
            {/* Fazendo o mapeamento do array e gerando a prop key obrigatória */}
            {bancoDeProdutos.map((item) => (
                <ProdutoCard key={item.id} produto={item} />
            ))}
        </section>
    );
}

export default Vitrine;