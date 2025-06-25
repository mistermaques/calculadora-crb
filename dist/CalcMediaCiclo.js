import { CalculadoraMedia } from "./CalculadoraMediaCiclo.js";
import { limitesSeries } from "./LimitesSeries.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputTC = document.getElementById("tc");
    const inputPT = document.getElementById("pt");
    const inputPU = document.getElementById("pu");
    const resultado = document.getElementById("resultado");
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
        try {
            const msgNota = CalculadoraMedia.calcularMediaNota(tc, pt, pu, limites.maxTc, limites.maxPt, limites.maxPu, limites.notaMinima);
            const msgPonto = CalculadoraMedia.calcularMediaPonto(tc, pt, pu, limites.maxTc, limites.maxPt, limites.maxPu, limites.pontoNotaMinima);
            resultado.innerHTML = `
        <p><strong>Resultado (Média Nota):</strong> ${msgNota}</p>
        <p><strong>Resultado (Média Pontos):</strong> ${msgPonto}</p>
      `;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
