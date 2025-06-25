import { CalculadoraRecAnual } from "./CalculadoraRecAnual.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputMedia = document.getElementById("media");
    const resultado = document.getElementById("resultado");
    const btnlimpar = document.getElementById("limpar");
    btnlimpar.addEventListener("click", () => {
        inputMedia.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const media = Number(inputMedia.value);
        const campos = [{ campo: inputMedia, nome: "Media" }];
        if (!validarCampos(campos, resultado))
            return;
        try {
            const msg = CalculadoraRecAnual.calcularPRNecessaria(media);
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
