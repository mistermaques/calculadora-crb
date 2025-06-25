import { CalculadoraMediaAnual } from "./CalculadoraMediaAnual.js";
import { limitesSeries } from "./LimitesSeries.js";
window.onload = () => {
    const btn = document.getElementById("calcular");
    const inputC1 = document.getElementById("c1");
    const inputC2 = document.getElementById("c2");
    const inputC3 = document.getElementById("c3");
    const inputC4 = document.getElementById("c4");
    const resultado = document.getElementById("resultado");
    btn.addEventListener("click", () => {
        const exibir = localStorage.getItem("exibir");
        const campos = [
            { campo: inputC1, nome: "C1" },
            { campo: inputC2, nome: "C2" },
            { campo: inputC3, nome: "C3" },
            { campo: inputC4, nome: "C4" },
        ];
        let algumErro = false;
        campos.forEach((item) => {
            const spanErro = item.campo.nextElementSibling;
            if (spanErro) {
                if (item.campo.value === "") {
                    item.campo.classList.add("erro");
                    spanErro.textContent = `Por favor, preencha o campo ${item.nome}.`;
                    resultado.textContent = "Por favor, preencha todos os campos.";
                    algumErro = true;
                }
                else {
                    item.campo.classList.remove("erro");
                    spanErro.textContent = "";
                }
            }
        });
        if (algumErro) {
            return;
        }
        const c1 = Number(inputC1.value);
        const c2 = Number(inputC2.value);
        const c3 = Number(inputC3.value);
        const c4 = Number(inputC4.value);
        // Para fins de exemplo, usando limites do 9ano como padrão.
        // Ajuste se precisar usar outra série:
        const limites = limitesSeries["9ano"];
        try {
            let msg = "";
            if (exibir === "nota") {
                msg = CalculadoraMediaAnual.calcularMediaFinalNota(c1, c2, c3, c4, limites.notaMinima);
            }
            else if (exibir === "ponto") {
                msg = CalculadoraMediaAnual.calcularMediaFinalPontos(c1, c2, c3, c4, limites.pontoNotaMinima);
            }
            else {
                msg = "Modo de exibição não selecionado.";
            }
            resultado.textContent = msg;
        }
        catch (error) {
            resultado.textContent = error.message;
        }
    });
};
