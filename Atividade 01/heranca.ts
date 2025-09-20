// Classe base Veiculo
class Veiculo {
  marca: string;
  modelo: string;
  ano: number;

  constructor(marca: string, modelo: string, ano: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInfo(): void {
    console.log(
      `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
    );
  }
}

// Subclasse Carro
class Carro extends Veiculo {
  numeroDePortas: number;

  constructor(
    marca: string,
    modelo: string,
    ano: number,
    numeroDePortas: number
  ) {
    super(marca, modelo, ano);
    this.numeroDePortas = numeroDePortas;
  }

  exibirInfo(): void {
    console.log(
      `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Portas: ${this.numeroDePortas}`
    );
  }
}

// Subclasse Moto
class Moto extends Veiculo {
  tipoDeGuidao: string;

  constructor(
    marca: string,
    modelo: string,
    ano: number,
    tipoDeGuidao: string
  ) {
    super(marca, modelo, ano);
    this.tipoDeGuidao = tipoDeGuidao;
  }

  exibirInfo(): void {
    console.log(
      `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Guidão: ${this.tipoDeGuidao}`
    );
  }
}

// Teste
const carro1 = new Carro("Honda", "Civic", 2022, 4);
const moto1 = new Moto("Bajaj", "Dominar 400", 2021, "Esportivo");

carro1.exibirInfo();
moto1.exibirInfo();
