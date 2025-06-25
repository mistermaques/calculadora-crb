export class CalculadoraMediaCiclo1e2 {
    static calcularMediaNota(tc, pt, pu, s1, s2, maxTc, maxPt, maxPu, maxS1, maxS2, notaMinima) {
        if (pu > maxPu || tc > maxTc || pt > maxPt || s1 > maxS1 || s2 > maxS2) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const p = pt + pu + s1 + s2;
        const mediaciclo = tc + p;
        const medianota = mediaciclo / 10;
        return medianota >= notaMinima
            ? `Você passou direto com nota ${medianota}`
            : `Você está de recuperação. Sua nota foi ${medianota}`;
    }
    static calcularMediaPonto(tc, pt, pu, s1, s2, maxTc, maxPt, maxPu, maxS1, maxS2, pontoNotaMinima) {
        if (pu > maxPu || tc > maxTc || pt > maxPt || s1 > maxS1 || s2 > maxS2) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const p = pt + pu + s1 + s2;
        const mediaciclo = tc + p;
        return mediaciclo >= pontoNotaMinima
            ? `Você passou direto com ${mediaciclo} pontos`
            : `Você está de recuperação. Seus pontos foram ${mediaciclo}`;
    }
}
