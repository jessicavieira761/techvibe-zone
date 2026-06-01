function Rodape() {
    const ano = new Date().getFullYear();
    return (
        <footer className="rodape-tech">
            <p>&copy; {ano} - Desenvolvido por Jéssica Vieira</p>
            <p className="creditos">IFES - Instituto Federal do Espírito Santo | TADS</p>
        </footer>
    );
}

export default Rodape;