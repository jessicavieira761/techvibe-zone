import React from "react";

function Sobre() {
  return (
    <div className="sobre-container">
      <section className="introducao-sobre">
        <h2>Sobre a TechVibe Zone</h2>
        <p>
          A TechVibe Zone é a sua vitrine digital especializada em tecnologia de ponta. 
          Nossa curadoria é focada em selecionar os melhores smartphones e notebooks do mercado, 
          garantindo que você encontre desde dispositivos ideais para o trabalho e estudos 
          até máquinas potentes para o público gamer e profissional.
        </p>
      </section>

      <section className="grid-categorias-sobre">
        <div className="card-pilar">
          <div className="icone-pilar">📱</div>
          <h3> Smartphones</h3>
          <p>Dos modelos mais eficientes para o dia a dia aos flagships com câmeras e processadores revolucionários.</p> 
        </div>

        <div className="card-pilar">
          <div className="icone-pilar">💻</div>
          <h3>Notebooks</h3>
          <p>Máquinas portáteis selecionadas para máxima produtividade, design ultrafino ou performance extrema em jogos.</p>
        </div>

        <div className="card-pilar">
          <div className="icone-pilar">🚀</div>
          <h3>Tecnologias</h3>
          <p>Foco total em hardware atualizado, conectividade rápida e especificações técnicas de verdade.</p>
        </div>
      </section>
    </div>
  );
}

export default Sobre;