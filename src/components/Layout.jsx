import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function Layout({ children }) {
    return (
        <div className="layout-wrapper">
            {/* Passamos o nome customizado da sua loja para o Cabeçalho via prop */}
            <Cabecalho titulo="TechVibe Zone" />
            
            {/* O "children" vai renderizar dinamicamente o que for colocado dentro do Layout */}
            <main className="main-content">
                {children}
            </main>
            
            <Rodape />
        </div>
    );
}

export default Layout;