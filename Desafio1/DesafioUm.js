function calcularClassificacao(partidas) {
    var tabela = [];
    partidas.forEach(function (partida) {
        var timeA = partida.timeA, timeB = partida.timeB, resultado = partida.resultado;
        var indiceA = tabela.findIndex(function (entrada) { return entrada.time == timeA; });
        var indiceB = tabela.findIndex(function (entrada) { return entrada.time == timeB; });
        if (indiceA < 0) {
            tabela.push({ time: timeA, pontos: 0 });
            indiceA = tabela.length - 1;
        }
        if (indiceB < 0) {
            tabela.push({ time: timeB, pontos: 0 });
            indiceB = tabela.length - 1;
        }
        if (resultado.golsTimeA > resultado.golsTimeB) {
            tabela[indiceA].pontos += 3; // Vitória Time A
        }
        else if (resultado.golsTimeA < resultado.golsTimeB) {
            tabela[indiceB].pontos += 3; // Vitória Time B
        }
        else {
            tabela[indiceA].pontos += 1; // Empate
            tabela[indiceB].pontos += 1; // Empate
        }
    });
    return tabela;
}
var partidas = [
    { timeA: "Time 1", timeB: "Time 2", resultado: { golsTimeA: 2, golsTimeB: 1 } },
    { timeA: "Time 3", timeB: "Time 4", resultado: { golsTimeA: 0, golsTimeB: 0 } },
    { timeA: "Time 1", timeB: "Time 3", resultado: { golsTimeA: 3, golsTimeB: 1 } },
    { timeA: "Time 2", timeB: "Time 4", resultado: { golsTimeA: 2, golsTimeB: 2 } },
    { timeA: "Time 1", timeB: "Time 4", resultado: { golsTimeA: 0, golsTimeB: 1 } },
    { timeA: "Time 2", timeB: "Time 3", resultado: { golsTimeA: 1, golsTimeB: 3 } }
];
console.log(calcularClassificacao(partidas));
