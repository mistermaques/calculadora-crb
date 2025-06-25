import { CalculadoraMediaAnual } from "./CalculadoraMediaAnual.js";
import { limitesSeries } from "./LimitesSeries.js";
import { validarCampos } from "./validacao.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputC1 = document.getElementById("c1");
    const inputC2 = document.getElementById("c2");
    const inputC3 = document.getElementById("c3");
    const inputC4 = document.getElementById("c4");
    const resultado = document.getElementById("resultado");
    const btnlimpa = document.getElementById("limpar");
    const linkRec = document.getElementById("linkRec");
    btnlimpa.addEventListener("click", () => {
        inputC1.value = "";
        inputC2.value = "";
        inputC3.value = "";
        inputC4.value = "";
        resultado.textContent = "";
    });
    btn.addEventListener("click", () => {
        const campos = [
            { campo: inputC1, nome: "C1" },
            { campo: inputC2, nome: "C2" },
            { campo: inputC3, nome: "C3" },
            { campo: inputC4, nome: "C4" },
        ];
        if (!validarCampos(campos, resultado))
            return;
        const c1 = Number(inputC1.value);
        const c2 = Number(inputC2.value);
        const c3 = Number(inputC3.value);
        const c4 = Number(inputC4.value);
        const limites = limitesSeries["9ano"];
        try {
            const res = CalculadoraMediaAnual.calcularMediaFinalCompleta(c1, c2, c3, c4);
            resultado.innerHTML = `
        <p>${res.pontos}</p>
        <p>${res.nota}</p>
      `;
            if (linkRec) {
                linkRec.style.display = res.mostrar ? "inline-block" : "none";
            }
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
