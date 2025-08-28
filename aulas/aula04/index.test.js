import {soma, sub, div, mult} from "./index.js"

console.log("Teste de Adição");

if (soma(2, 2)=== 4) console.log("Passou 1º")
    else console.log("Falhou 1º");

if (soma(-1, 2) === 1) console.log("Passou 2º")
    else console.log("Falhou 2º");

if (soma(2, 0) === 2)console.log("Passou 3º")
    else console.log("Falhou 3º");

console.log("Teste de Subtração");

if (sub(4, 2) === 2)console.log("Passou 4º")
    else console.log("Falhou 4º");

if (sub(2, 1) === 1)console.log("Passou 5º")
    else console.log("Falhou 5º");

console.log("Teste de Multiplicação");

if (mult(2, 2) === 4)console.log("Passou 6º")
    else console.log("Falhou 6º");

if (mult(5, 5) === 25)console.log("Passou 7º")
    else console.log("Falhou 7º");

console.log("Teste de Divisão");

if (div(2, 1) === 2)console.log("Passou 8º")
    else console.log("Falhou 8º");

if (div(0, 10) === 0)console.log("Passou 9º")
    else console.log("Falhou 9º");

if (div(10, 0) === undefined)console.log("Passou 10º")
    else console.log("Falhou 10º");

