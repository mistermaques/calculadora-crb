export class CalculadoraPT {
    static calcularPT(tc, pu, maxTc, maxPu, notaMinima, notaMaximaPT) {
        if (tc > maxTc || pu > maxPu) {
            throw new Error("Notas acima dos limites permitidos.");
        }
        const soma = tc + pu;
        const resultado = notaMinima - soma;
        if (resultado > notaMaximaPT) {
            return "Recuperação";
        }
        else if (resultado <= 0) {
            return `Você já atingiu a nota mínima! ${soma}`;
        }
        else {
            return `Você precisa tirar no mínimo ${resultado} pontos na PT`;
        }
    }
}
