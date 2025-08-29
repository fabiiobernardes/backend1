const calculadora = require('../src/index.js')

describe("Teste da Calculador", () => {

// teste adição
test ("2 + 2 = 4", () => {
    expect(calculadora.soma).toBeDefined();
    expect(calculadora.soma(2, 2)).toBe(4);
})

test ("2 + 2 = 4", () => {
    expect(calculadora.soma(2, 0)).toBe(2);
})

// teste subtração
test ("2 - 2 = 0", () => {
    expect(calculadora.sub(2, 2)).toBe(0);
})

test ("2 - 8 = 6", () => {
    expect(calculadora.sub(2, 8)).toBe(-6);
})

test ("se a >= b, então a - b >= 0 ", () => {
    expect(calculadora.sub).toBeDefined();
    expect(calculadora.sub(2, 1)).toBeGreaterThanOrEqual(0);
    expect(calculadora.sub(2, 2)).toBeGreaterThanOrEqual(0);
    expect(calculadora.sub(2, -2)).toBeGreaterThanOrEqual(0);
    expect(calculadora.sub(-2, -4)).toBeGreaterThanOrEqual(0);
})

// teste de divisão
test ("8 / 2 = 6", () => {
    expect(calculadora.div(8, 2)).toBe(4);
})

test ("24 / 4 = 6", () => {
    expect(calculadora.div(24, 4)).toBe(6);
})

test ("12 / 0 = undefined", () => {
    expect(calculadora.div(12, 0)).toBe(undefined);
})


// teste multiplicação 

test ("12 * 4 = 48", () => {
    expect(calculadora.mult(12, 4)).toBe(48);
})

test ("9 * 9 = 81", () => {
    expect(calculadora.mult(9, 9)).toBe(81);
})

test ("se a e b < 0 ou a e b > 0 então a * b > 0", () => {
    expect(calculadora.mult).toBeDefined();
    expect(calculadora.mult(1, 2)).toBeGreaterThan(0);
    expect(calculadora.mult(-2, -1)).toBeGreaterThan(0);
})

test ("se a < 0 ou b < 0  então a * b < 0", () => {
    expect(calculadora.mult(-2, 2)).toBeLessThan(0);
    expect(calculadora.mult(2, -2)).toBeLessThan(0);
})

test ("se a = 0 ou b = 0  então a * b = 0", () => {
    expect(calculadora.mult(2, 0)).toBe(0);
    expect(calculadora.mult(-2, 0)).toBe(-0);
})
})
