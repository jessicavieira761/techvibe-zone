function Cabecalho({ titulo }) {
    return (
        <header className="cabecalho-tech">
            <div className="logo-area">
                <h1>{titulo}</h1>
                <span className="subtitulo">Sua vitrine de hardware</span>
            </div>
        </header>
    );
}

export default Cabecalho;