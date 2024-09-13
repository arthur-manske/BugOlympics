function verificarSextaFeira13(ano) {
    const mesesComSexta13 = [];

    for (let mes = 0; mes < 12; mes++) {
        const dia13 = new Date(ano, mes, 13);

        if (dia13.getDay() === 5) { // Verifica se é sexta-feira
            mesesComSexta13.push(mes+1);
        }
    }

    return {    
        mesesComSexta13: mesesComSexta13,
        totalSexta13: mesesComSexta13.length,
    };
}

console.log(verificarSextaFeira13(2023));

