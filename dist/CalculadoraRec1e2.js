export class CalculadoraRec1e2 {
    CalcularRec(tc, pt, pu, maxTc, maxPu, maxPt, notaMinima = 60) {
        if (tc > maxTc || pu > maxPu || pt > maxPt) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        // Soma de PT e PU
        const soma = pt + pu;
        // REC necessária para bater a nota mínima
        const recNecessaria = 2 * (notaMinima - tc) - soma;
        // Limite máximo para REC
        const maxRecPermitida = maxPt + maxPu;
        // Ajusta a REC final de acordo com o limite máximo
        const recFinal = recNecessaria > maxRecPermitida ? maxRecPermitida : recNecessaria;
        return `Você precisa tirar no mínimo ${recFinal} pontos na REC para atingir a nota mínima de ${notaMinima}.`;
    }
    CalcularRecMedia(tc, pt, pu, s1, s2, maxTc, maxPu, maxPt, maxS1, maxS2, notaMinima = 60) {
        if (tc > maxTc || pu > maxPu || pt > maxPt || s1 > maxS1 || s2 > maxS2) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        // Soma de PT e PU
        const soma = pt + pu + s1 + s2;
        // REC necessária para bater a nota mínima
        const recNecessaria = 2 * (notaMinima - tc) - soma;
        // Limite máximo para REC
        const maxRecPermitida = maxPt + maxPu + maxS1 + maxS2;
        // Ajusta a REC final de acordo com o limite máximo
        const recFinal = recNecessaria > maxRecPermitida ? maxRecPermitida : recNecessaria;
        return `Você precisa tirar no mínimo ${recFinal.toFixed(2)} pontos na REC para atingir a nota mínima de ${notaMinima}.`;
    }
    static calcularNotaFinal(tc, pt, pu, rec, s1, s2, maxTc, maxPu, maxPt) {
        if (tc > maxTc || pu > maxPu || pt > maxPt) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        // Fórmula: Nota Final = TC + (PT + PU + REC)/2
        const bloco = (pt + pu + rec) / 2;
        let notaFinal = tc + bloco;
        if (notaFinal > 60) {
            notaFinal = 60;
        }
        const notafinalfinal = notaFinal / 10;
        return `Com a nota de rec = ${rec} você tirou ${notaFinal.toFixed(2)} pontos / nota ${notafinalfinal.toFixed(1)} .`;
    }
    static calcularNotaFinalMedio(tc, pt, pu, s2, s1, rec, maxTc, maxPu, maxPt, maxS1, maxS2) {
        if (tc > maxTc || pu > maxPu || pt > maxPt || s1 > maxS1 || s2 > maxS2) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const p = pt + pu + s1 + s2;
        const bloco = (p + rec) / 2;
        let notaFinal = tc + bloco;
        if (notaFinal > 60) {
            notaFinal = 60;
        }
        const notafinalfinal = notaFinal / 10;
        return `A nota final com REC = ${rec} é: ${notaFinal.toFixed(2)} pontos / nota ${notafinalfinal.toFixed(1)} .`;
    }
}
