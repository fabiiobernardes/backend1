function calcularMediaAluno (a1, a2, a3){
    if (!a1 || !a2 ) throw "Notas não definidas"
    if (a1 < 0 || a2 < 0) throw "Notas a1 e a2 não podem ser negativas"
    if (a3 !== undefined && a3 < 0 ) throw ("Nota a3 não pode ser negativa")
    if (a3 === undefined) return (a1 * 0.4 + a2 * 0.6)
    if (a1 * 0.4 + a3 * 0.6 > a1 * 0.4 + a2 * 0.6) return (a1 * 0.4 + a3 * 0.6)
    if (a3 > a1) return (a2 + a3) / 2
    return Math.max (
        a1 * 0.4 + a2 * 0.6,
        a1 * 0.4 + a3 * 0.6,
        a3 * 0.4 + a2 * 0.6
    )

    
    
}

module.exports = {calcularMediaAluno};