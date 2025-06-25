"use strict";
// main.ts
// Cards disponíveis por série
const cardsPorSerie = {
    "5ano": [
        {
            id: "pt",
            texto: "Quanto eu preciso tirar na PT para não ficar de Recuperação? C1, C2 e C3",
            destino: "CalcPT5ao9.html",
        },
        {
            id: "rec",
            texto: "Quanto eu preciso tirar na Rec para recuperar o ciclo? C1, C2 e C3",
            destino: "CalcRecCiclo1_2.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "c4",
            texto: "Aprimoramento ou Consolidação no C4?",
            destino: "calcC4.html",
        },
        {
            id: "ptCons",
            texto: "Quanto preciso na PT Consolidação?",
            destino: "calcConsol.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo5ao9.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaFinalREC.html",
        },
    ],
    "6ano": [
        {
            id: "pt",
            texto: "Quanto eu preciso tirar na PT para não ficar de Recuperação? C1, C2 e C3",
            destino: "CalcPT5ao9.html",
        },
        {
            id: "rec",
            texto: "Quanto eu preciso tirar na Rec para recuperar o ciclo? C1, C2 e C3",
            destino: "CalcRecCiclo1_2.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "c4",
            texto: "Aprimoramento ou Consolidação no C4?",
            destino: "calcC4.html",
        },
        {
            id: "ptCons",
            texto: "Quanto preciso na PT Consolidação?",
            destino: "calcConsol.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo5ao9.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaFinalREC.html",
        },
    ],
    "7ano": [
        {
            id: "pt",
            texto: "Quanto eu preciso tirar na PT para não ficar de Recuperação? C1, C2 e C3",
            destino: "CalcPT5ao9.html",
        },
        {
            id: "rec",
            texto: "Quanto eu preciso tirar na Rec para recuperar o ciclo? C1, C2 e C3",
            destino: "CalcRecCiclo1_2.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "c4",
            texto: "Aprimoramento ou Consolidação no C4?",
            destino: "calcC4.html",
        },
        {
            id: "ptCons",
            texto: "Quanto preciso na PT Consolidação?",
            destino: "calcConsol.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo5ao9.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaFinalREC.html",
        },
    ],
    "8ano": [
        {
            id: "pt",
            texto: "Quanto eu preciso tirar na PT para não ficar de Recuperação? C1, C2 e C3",
            destino: "CalcPT5ao9.html",
        },
        {
            id: "rec",
            texto: "Quanto eu preciso tirar na Rec para recuperar o ciclo? C1, C2 e C3",
            destino: "CalcRecCiclo1_2.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "c4",
            texto: "Aprimoramento ou Consolidação no C4?",
            destino: "calcC4.html",
        },
        {
            id: "ptCons",
            texto: "Quanto preciso na PT Consolidação?",
            destino: "calcConsol.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo5ao9.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaFinalREC.html",
        },
    ],
    "9ano": [
        {
            id: "pt",
            texto: "Quanto eu preciso tirar na PT para não ficar de Recuperação? C1, C2 e C3",
            destino: "CalcPT5ao9.html",
        },
        {
            id: "rec",
            texto: "Quanto eu preciso tirar na Rec para recuperar o ciclo? C1, C2 e C3",
            destino: "CalcRecCiclo1_2.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "c4",
            texto: "Aprimoramento ou Consolidação no C4?",
            destino: "calcC4.html",
        },
        {
            id: "ptCons",
            texto: "Quanto preciso na PT Consolidação?",
            destino: "calcConsol.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo5ao9.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaFinalREC.html",
        },
    ],
    "1em": [
        {
            id: "pt1e2",
            texto: "Quanto preciso tirar na PT + S2?",
            destino: "CalcPTS2-1e2.html",
        },
        {
            id: "rec",
            texto: "Quanto preciso tirar na REC?",
            destino: "CalcRecMedio.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo1e2.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaRec.html",
        },
    ],
    "2em": [
        {
            id: "pt1e2",
            texto: "Quanto preciso tirar na PT + S2?",
            destino: "CalcPTS2-1e2.html",
        },
        {
            id: "rec",
            texto: "Quanto preciso tirar na REC?",
            destino: "CalcRecMedio.html",
        },
        {
            id: "mediaFinal",
            texto: "Calcular Média Final",
            destino: "CalcMediaAnual.html",
        },
        {
            id: "mediaCiclo",
            texto: "Calcular Média do Ciclo",
            destino: "CalcMediaCiclo1e2.html",
        },
        {
            id: "mediaPosRec",
            texto: "Calcular Média Final após REC",
            destino: "CalcMediaRec.html",
        },
    ],
};
window.onload = () => {
    const select = document.getElementById("serie");
    const container = document.getElementById("cardsContainer");
    select.addEventListener("change", () => {
        const serie = select.value;
        container.innerHTML = "";
        if (!serie || !(serie in cardsPorSerie))
            return;
        localStorage.setItem("serieSelecionada", serie);
        cardsPorSerie[serie].forEach((card) => {
            const div = document.createElement("div");
            div.className = "card";
            div.textContent = card.texto;
            div.style.cursor = "pointer";
            div.addEventListener("click", () => {
                window.location.href = card.destino;
            });
            container.appendChild(div);
        });
    });
};
