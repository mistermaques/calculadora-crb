import { CalculadoraRec1e2 } from "./CalculadoraRec1e2.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputTC = document.getElementById("tc");
    const inputPT = document.getElementById("pt");
    const inputPU = document.getElementById("pu");
    const inputREC = document.getElementById("rec");
    const resultado = document.getElementById("resultado");
    const btnLimpar = document.getElementById("limpar");
    btnLimpar.addEventListener("click", () => {
        inputPT.value = "";
        inputPU.value = "";
        inputREC.value = "";
        inputTC.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const serie = localStorage.getItem("serieSelecionada");
        const tc = Number(inputTC.value);
        const pt = Number(inputPT.value);
        const pu = Number(inputPU.value);
        const rec = Number(inputREC.value);
        if (!serie) {
            resultado.textContent = "Nenhuma série foi selecionada.";
            return;
        }
        const limites = limitesSeries[serie];
        if (!limites) {
            resultado.textContent = "Série não compatível com esta calculadora.";
            return;
        }
        const campos = [
            { campo: inputPT, nome: "PT" },
            { campo: inputPU, nome: "PU" },
            { campo: inputREC, nome: "REC" },
            { campo: inputTC, nome: "TC" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        try {
            const msg = CalculadoraRec1e2.calcularNotaFinal(tc, pt, pu, rec, limites.maxTc, limites.maxPt, limites.maxPu, limites.pontoNotaMinima, limites.pesoPT);
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
