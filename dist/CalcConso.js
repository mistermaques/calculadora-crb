import { CalculadoraC4 } from "./CalculadoraC4.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputAV = document.getElementById("av");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputAV.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const serie = localStorage.getItem("serieSelecionada");
        const av = Number(inputAV.value);
        if (!serie) {
            resultado.textContent = "Nenhuma série foi selecionada.";
            return;
        }
        const limites = limitesSeries[serie];
        if (!limites) {
            resultado.textContent = "Série não implementada.";
            return;
        }
        const campos = [{ campo: inputAV, nome: "AV" }];
        if (!validarCampos(campos, resultado))
            return;
        const calculadora = new CalculadoraC4();
        try {
            const msg = calculadora.calcularPTNecessario(av, limites.MaxPtC4, limites.MaxavC4);
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
