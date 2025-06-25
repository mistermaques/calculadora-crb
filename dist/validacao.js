export function validarCampos(campos, resultado) {
    let erro = false;
    resultado.textContent = "";
    campos.forEach((item) => {
        var _a;
        // Pega o span que está logo depois do .campo-linha
        const spanErro = (_a = item.campo.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        if (spanErro) {
            if (item.campo.value.trim() === "") {
                item.campo.classList.add("erro");
                spanErro.textContent = `Por favor, preencha o campo ${item.nome}.`;
                erro = true;
            }
            else {
                item.campo.classList.remove("erro");
                spanErro.textContent = "";
            }
        }
    });
    if (erro) {
        resultado.textContent = "Por favor, preencha todos os campos.";
    }
    return !erro;
}
