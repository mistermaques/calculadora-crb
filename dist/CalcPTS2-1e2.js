import { CalculadoraPTS2 } from "./CalculadoraPTS2.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputTC = document.getElementById("tc");
    const inputPU = document.getElementById("pu");
    const inputS1 = document.getElementById("s1");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputPU.value = "";
        inputS1.value = "";
        inputTC.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const serie = localStorage.getItem("serieSelecionada");
        const campos = [
            { campo: inputTC, nome: "TC" },
            { campo: inputPU, nome: "PU" },
            { campo: inputS1, nome: "S1" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        const tc = Number(inputTC.value);
        const pu = Number(inputPU.value);
        const s1 = Number(inputS1.value);
        if (!serie) {
            resultado.textContent = "Nenhuma série foi selecionada.";
            return;
        }
        const limites = limitesSeries[serie];
        if (!limites) {
            resultado.textContent = "Série não compatível com esta calculadora.";
            return;
        }
        try {
            const msg = CalculadoraPTS2.calcularPTS2(tc, pu, s1, limites.maxTc, limites.maxPu, limites.maxS1, limites.maxPt, limites.maxS2, limites.pontoNotaMinima, limites.pesoPT, limites.pesoS2);
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
