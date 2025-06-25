import { CalculadoraPT } from "./CalculadoraPT.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputTC = document.getElementById("tc");
    const inputPU = document.getElementById("pu");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputPU.value = "";
        inputTC.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const serie = localStorage.getItem("serieSelecionada");
        const campos = [
            { campo: inputPU, nome: "PU" },
            { campo: inputTC, nome: "TC" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        const tc = Number(inputTC.value);
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
        try {
            const msg = CalculadoraPT.calcularPT(tc, pu, limites.maxTc, limites.maxPu, limites.pontoNotaMinima, // nota mínima que antes era "Minimo"
            limites.maxPt // nota máxima que antes era "NotaMaximaPT"
            );
            resultado.innerHTML = `
      <p><strong>Resultado minimo esperado para a PT:</strong> ${msg}</p>
    `;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
