function soma (a, b){
    return a + b;
}

function sub (a, b){
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function div (a, b) {
    if(b === 0) return undefined;
    return a / b;
}

export {soma, div, mult, sub};