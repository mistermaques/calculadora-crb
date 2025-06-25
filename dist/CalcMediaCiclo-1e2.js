import { limitesSeries } from "./LimitesSeries.js";
import { CalculadoraMediaCiclo1e2 } from "./CalculadoraMediaCiclo1e2.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputTC = document.getElementById("tc");
    const inputPT = document.getElementById("pt");
    const inputPU = document.getElementById("pu");
    const inputS1 = document.getElementById("s1");
    const inputS2 = document.getElementById("s2");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputPT.value = "";
        inputPU.value = "";
        inputS1.value = "";
        inputS2.value = "";
        inputTC.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const serie = localStorage.getItem("serieSelecionada");
        const tc = Number(inputTC.value);
        const pt = Number(inputPT.value);
        const pu = Number(inputPU.value);
        const s1 = Number(inputS1.value);
        const s2 = Number(inputS2.value);
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
            { campo: inputS1, nome: "S1" },
            { campo: inputS2, nome: "S2" },
            { campo: inputTC, nome: "TC" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        try {
            const msgNota = CalculadoraMediaCiclo1e2.calcularMediaNota(tc, pt, pu, s1, s2, limites.maxTc, limites.maxPt, limites.maxPu, limites.maxS1, limites.maxS2, limites.notaMinima);
            const msgPonto = CalculadoraMediaCiclo1e2.calcularMediaPonto(tc, pt, pu, s1, s2, limites.maxTc, limites.maxPt, limites.maxPu, limites.maxS1, limites.maxS2, limites.pontoNotaMinima);
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
