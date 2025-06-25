import { CalculadoraRec1e2 } from "./CalculadoraRec1e2.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputTC = document.getElementById("tc");
    const inputPT = document.getElementById("pt");
    const inputPU = document.getElementById("pu");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputPT.value = "";
        inputPU.value = "";
        inputTC.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const serie = localStorage.getItem("serieSelecionada");
        const tc = Number(inputTC.value);
        const pt = Number(inputPT.value);
        const pu = Number(inputPU.value);
        if (!serie) {
            resultado.textContent = "Nenhuma série foi selecionada.";
            return;
        }
        const limites = limitesSeries[serie];
        if (!limites) {
            resultado.textContent = "Série ainda não implementada.";
            return;
        }
        const campos = [
            { campo: inputPT, nome: "PT" },
            { campo: inputPU, nome: "PU" },
            { campo: inputTC, nome: "TC" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        const calculadora = new CalculadoraRec1e2();
        try {
            const msg = calculadora.CalcularRec(tc, pt, pu, limites.maxTc, limites.maxPu, limites.maxPt, limites.pontoNotaMinima // ou notaMinima, dependendo da série
            );
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
