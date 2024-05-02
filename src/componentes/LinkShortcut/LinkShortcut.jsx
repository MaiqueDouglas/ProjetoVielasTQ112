import React from "react";
import './LinkShortcut.css';
import ResultadoColecoes from "../ResultadoColecoes/ResultadoColecoes";

function LinkShortcut() {
    return (
        <div className="container-shortcut">
            <div className="shortcut">
                <a href="/ResultadoColecoes">#Paraísopolis</a>
                <a href="/2">#Saúde</a>
                <a href="/3">#Hospitais</a>
                <a href="/4">#Coperifa</a>
                <a href="/5">#CasaDeCultura</a>
                <a href="/6">#Urnas</a>
            </div>
            
        </div>
    );
}

export default LinkShortcut;
