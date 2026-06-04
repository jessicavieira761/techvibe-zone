import { useState } from "react";
import "./Contador.css";        //importei o css aqui nessa linha

function Contador() {
    // criando o estado
    const [valor, setValor] = useState(0);

   return (
        <div className="contador-container">
            <h2 className="contador-titulo">Contador</h2>

            <h1 className="contador-numero">{valor}</h1>

            // coloquei o setValor dentro do onClick usando uma arrow function
            <button
                className="btn-contador btn-menos"
                onClick={() => setValor(valor -1)}
            >
                -
            </button>

            <button
                className="btn-contador"
                onClick={() => setValor(valor +1)}
            >
                +
            </button>
        </div>
    );
}
export default Contador;