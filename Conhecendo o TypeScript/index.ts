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


interface Ipessoainha {
  id: string | number,
  name: string,
  SayMyName: () => string;
}

class Pessoa implements Ipessoainha {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }

  public SayMyName(): string {
    return `Nome: ${this.name}; Identificação: ${this.id};`;
  }
}

const OtimaPessoa = new Pessoa('1', 'Brenno');

console.log(OtimaPessoa.SayMyName())

function ExibirNome(target: any){
  console.log(target);
}

@ExibirNome
class Funcionario{}