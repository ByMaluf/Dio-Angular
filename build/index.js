"use strict";
const meuNome = "Brenno";
const nome = (nome = meuNome) => {
    return `Meu nome é ${nome}`;
};
const data = new Date("2024-06-29 21:50");
function callToPhone(phone) {
    return typeof phone === "string" ? +phone : phone;
}
console.log(`String: ${callToPhone("23")}, Number: ${callToPhone(13)}`);
