function Selo({ texto = "Destaque", estilo = "padrao" }) {
    return (
        <span className={`selo-custom-tag selo-${estilo}`}>
            {texto}
        </span>
    );
}

export default Selo;