"use strict";
/*import { NotasBase } from "./NotaBase.js";

export class MediaAnual extends NotasBase {
  calcMediaFinalpontos(c1: number, c2: number, c3: number, c4: number): string {
    const mediafinalpontos = c1 + c2 + c3 + c4;
    const faltante = this.PontoMinimo - mediafinalpontos;

    if (c4 < 5) {
      return "Você foi reprovado automaticamente por no atingir os pontos minimos de 5 para o ciclo 4";
    } else if (mediafinalpontos >= this.PontoMinimo) {
      return `Parabéns! Você atingiu ${mediafinalpontos.toFixed(
        2
      )} pontos e passous direto. 🎉`;
    }

    return `Você fez ${mediafinalpontos.toFixed(2)} pontos.
Faltaram ${faltante.toFixed(2)} pontos para atingir o mínimo de ${
      this.PontoMinimo
    } pontos. 😢`;
  }

  calcMediaFinalNota(c1: number, c2: number, c3: number, c4: number): string {
    const mediafinalNota = (c1 + c2 + c3 + c4) / 4;

    if (c4 < 5) {
      return "Você foi reprovado automaticamente por no atingir os pontos minimos de 5 para o ciclo 4";
    } else if (mediafinalNota >= this.NotaMinima) {
      return `Parabéns! Você atingiu ${mediafinalNota.toFixed(
        2
      )} pontos e passous direto. 🎉`;
    }

    const faltante = this.NotaMinima - mediafinalNota;

    return `Você fez ${mediafinalNota.toFixed(2)} de nota.
Faltaram ${faltante.toFixed(2)} para atingir a nota mínima de ${
      this.NotaMinima
    } . 😢`;
  }
}*/
