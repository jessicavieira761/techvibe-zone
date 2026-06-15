import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";
import Sobre from "./pages/Sobre";
import Contador from "./components/Contador";
import TextoTempoRreal from "./components/TextoTempoReal";
import "./App.css";

function App() {
    return (
        <Layout>
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produto/:id" element={<Detalhe />} />
            <Route path="*" element={<NaoEncontrado />} />
           </Routes>
        </Layout>
    );
}

export default App;