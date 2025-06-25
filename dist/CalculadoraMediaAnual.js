export class CalculadoraMediaAnual {
    static calcularMediaFinalCompleta(c1, c2, c3, c4, pontoMinimo = 24, notaMinima = 6) {
        const soma = c1 + c2 + c3 + c4;
        const media = soma / 4;
        let mostrar = false;
        const resultado = {
            pontos: "",
            nota: "",
            mostrar: false,
        };
        if (c4 < 5) {
            const msg = "Você não atingiu a nota mínima de 5 no ciclo 4.";
            resultado.pontos = msg;
            resultado.nota = msg;
            resultado.mostrar = true;
            return resultado;
        }
        if (soma < pontoMinimo || media < notaMinima) {
            mostrar = true;
        }
        resultado.pontos =
            soma >= pontoMinimo
                ? `Você atingiu ${soma.toFixed(2)} pontos.`
                : `Você tirou ${soma.toFixed(2)} pontos.\nFaltaram ${(pontoMinimo - soma).toFixed(2)} pontos para atingir o mínimo.`;
        resultado.nota =
            media >= notaMinima
                ? `Você atingiu ${media.toFixed(2)} de média.`
                : `Você tirou ${media.toFixed(2)} de média.\nFaltaram ${(notaMinima - media).toFixed(2)} para atingir a nota mínima.`;
        resultado.mostrar = mostrar;
        return resultado;
    }
}
