function Botao({ texto = "Ver Detalhes", variante = "primario", ...props }) {
    return (
        <button className={`btn-custom btn-${variante}`} {...props}>
            {texto}
        </button>
    );
}

export default Botao;