import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <section>
      <h1>Página não encontrada 😢</h1>
      <p>Ops! O conteúdo que você tentou acessar não existe.</p>
      <Link to="/">Voltar para a loja</Link>
    </section>
  );
}

export default NaoEncontrado;
