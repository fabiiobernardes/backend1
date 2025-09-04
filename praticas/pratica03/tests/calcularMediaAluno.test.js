const {calcularMediaAluno}  = require ('../src/calcularMediaAluno.js')

describe("Teste da Media", () => {

test ("6 + 4 + 8 / 3 ", () => {
    expect(calcularMediaAluno).toBeDefined();
})

test ("Todas as notas são definidas", () => {
    expect(calcularMediaAluno).toThrow("Notas não definidas");
})

test ("Notas negativas", () => {
    expect(() => calcularMediaAluno(-1, 7)).toThrow("Notas a1 e a2 não podem ser negativas");
    expect(() => calcularMediaAluno(5, -2)).toThrow("Notas a1 e a2 não podem ser negativas");
})

test ("Nota a3 definida, calcula media base", () => {
   expect(calcularMediaAluno(5, 7)).toBeCloseTo(6.2);
})

test ("a3 negativa", () => {
    expect(() => calcularMediaAluno(5, 8, -1)).toThrow("Nota a3 não pode ser negativa");
})

test ("Nota a3 melhor combinada com a1 substituindo a2 ", () => {
    expect(calcularMediaAluno(5, 3, 9)).toBeCloseTo(7.4);
 })

 test ("Nota a3 melhor combinada com a2 substituindo a1 ", () => {
    expect(calcularMediaAluno(4, 7, 6)).toBeCloseTo(6.5);
 })

 test ("Manter melhor media quando ela é a melhor opção ", () => {
    expect(calcularMediaAluno(9, 8, 5)).toBeCloseTo(9 * 0.4 + 8 * 0.6);
 })
})