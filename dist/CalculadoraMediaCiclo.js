export class CalculadoraMedia {
    static calcularMediaNota(tc, pt, pu, maxTc, maxPt, maxPu, notaMinima) {
        if (pu > maxPu || tc > maxTc || pt > maxPt) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const p = pt + pu;
        const mediaciclo = tc + p;
        const medianota = mediaciclo / 10;
        return medianota >= notaMinima
            ? `Aprovado você tirou a nota ${medianota}`
            : `Recuperação, você tirou a nota ${medianota}`;
    }
    static calcularMediaPonto(tc, pt, pu, maxTc, maxPt, maxPu, pontoNotaMinima) {
        if (pu > maxPu || tc > maxTc || pt > maxPt) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const p = pt + pu;
        const mediaciclo = tc + p;
        return mediaciclo >= pontoNotaMinima
            ? `Você passou direto com ${mediaciclo} pontos`
            : `Você está de recuperação. Seus pontos foram ${mediaciclo}`;
    }
}
