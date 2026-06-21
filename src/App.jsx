import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";
import Sobre from "./pages/Sobre";
import Contador from "./components/Contador";
import TextoTempoRreal from "./components/TextoTempoReal";
import Login from "./pages/Login";
import RotaPrivada from "./components/RotaPrivada";
import MinhaConta from "./pages/MinhaConta";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {/* rota publlica */}
                    <Route path="/" element={<Home />} />

                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/produto/:id" element={<Detalhe />} />

                    {/* rota de login */}
                    <Route path="/login" element={<Login />} />

                    {/* rota protegida*/}
                    <Route
                        path="/minha-conta"
                        element={
                            <RotaPrivada>
                                <MinhaConta />
                            </RotaPrivada>
                        }
                    />

                    <Route path="*" element={<NaoEncontrado />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;