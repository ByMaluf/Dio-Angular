//Teste trabalhando com TypeScript
const meuNome = "Brenno";

const nome = (nome: string = meuNome): string => {
  return `Meu nome é ${nome}`;
};

const data: Date = new Date("2024-06-29 21:50");
// console.log(nome() + " " + data.toISOString());

function callToPhone(phone: string | number): number {
  return typeof phone === "string" ? +phone : phone;
}

console.log(`String: ${callToPhone("23")}, Number: ${callToPhone(13)}`);
