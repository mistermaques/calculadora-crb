export class CalculadoraC4 {
    //revisado
    static calcularMediaFinalNota(c1, c2, c3, notaMinima = 6) {
        const mediaFinalNota = (c1 + c2 + c3) / 3;
        const mediaFinalPonto = c1 + c2 + c3;
        if (mediaFinalNota < notaMinima) {
            return `Você tirou nota ${mediaFinalNota.toFixed(1)} e ${mediaFinalPonto.toFixed(1)} pontos,
       está em consolidação.`;
        }
        else {
            return `Você tirou nota ${mediaFinalNota.toFixed(1)} e ${mediaFinalPonto.toFixed(1)} pontos,
        Você está em aprimoramento.`;
        }
    }
    calcularPTNecessario(av, MaxPtC4, MaxavC4) {
        if (av > MaxavC4) {
            throw new Error("Nota de AV acima do limite permitido.");
        }
        const minimoPontosParaPassar = 60;
        const ptNecessario = minimoPontosParaPassar - av;
        return `Você precisa tirar pelo menos ${ptNecessario.toFixed(1)} pontos no PT para atingir os 60 pontos mínimos.`;
    }
}
