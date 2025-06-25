export class CalculadoraPTS2 {
    static calcularPTS2(tc, pu, s1, maxTc, maxPu, maxS1, maxPt, maxS2, notaMinima, pesoPT, pesoS2) {
        if (tc > maxTc || pu > maxPu || s1 > maxS1) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const somaAtual = tc + pu + s1;
        const faltante = notaMinima - somaAtual;
        const pesoTotal = pesoPT + pesoS2;
        const ptFinal = faltante * (pesoPT / pesoTotal);
        const s2Final = faltante * (pesoS2 / pesoTotal);
        if (faltante <= 0) {
            return `Você já atingiu a nota mínima! ${somaAtual}`;
        }
        else if (ptFinal > maxPt || s2Final > maxS2) {
            return "Mesmo tirando a nota máxima na PT e na S2, você não atinge a média mínima, então está de recuperação. 😢";
        }
        else {
            return `Você precisa tirar aproximadamente ${ptFinal.toFixed(1)} na PT e ${s2Final.toFixed(1)} na S2 para atingir a nota mínima.`;
        }
    }
}
