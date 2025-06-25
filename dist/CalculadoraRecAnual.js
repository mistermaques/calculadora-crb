export class CalculadoraRecAnual {
    static calcularPRNecessaria(mediaCiclos, notaMinima = 6.0) {
        if (mediaCiclos > 10) {
            throw new Error("A média dos ciclos não pode ser maior que 10.");
        }
        const prNecessaria = (2 * notaMinima - mediaCiclos) * 10;
        if (prNecessaria > 100) {
            return `Mesmo com 100 na PR, você não alcança média ${notaMinima}. 😢`;
        }
        if (prNecessaria <= 0) {
            return `Você já atingiu média ${notaMinima} com os ciclos! 🎉`;
        }
        return `Você precisa tirar ${prNecessaria.toFixed(1)} na PR para atingir média final ${notaMinima}.`;
    }
}
