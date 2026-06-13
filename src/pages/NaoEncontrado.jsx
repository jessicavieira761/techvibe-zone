import { Link } from "react-router-dom";

function NaoEncontrado() {
  return (
    <section>
      <h1>404 - Página não encontrada</h1>
      <p>Ops! O conteúdo que você procura não existe.</p>
      <Link to="/">Voltar para a loja</Link>
    </section>
  );
}

export default NaoEncontrado;
