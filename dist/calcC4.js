import { CalculadoraC4 } from "./CalculadoraC4.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputC1 = document.getElementById("c1");
    const inputC2 = document.getElementById("c2");
    const inputC3 = document.getElementById("c3");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputC1.value = "";
        inputC2.value = "";
        inputC3.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const c1 = Number(inputC1.value);
        const c2 = Number(inputC2.value);
        const c3 = Number(inputC3.value);
        const notaMinima = limitesSeries["9ano"];
        const campos = [
            { campo: inputC1, nome: "C1" },
            { campo: inputC2, nome: "C2" },
            { campo: inputC3, nome: "C3" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        try {
            const msg = CalculadoraC4.calcularMediaFinalNota(c1, c2, c3, notaMinima.notaMinima);
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
