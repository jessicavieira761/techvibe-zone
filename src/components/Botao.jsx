function Botao({ texto = "Ver Detalhes", variante = "primario" }) {
    return (
        <button className={`btn-custom btn-${variante}`}>
            {texto}
        </button>
    );
}

export default Botao;