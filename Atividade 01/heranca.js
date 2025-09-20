var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe base Veiculo
var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Veiculo.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano));
    };
    return Veiculo;
}());
// Subclasse Carro
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(marca, modelo, ano, numeroDePortas) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    Carro.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano, ", Portas: ").concat(this.numeroDePortas));
    };
    return Carro;
}(Veiculo));
// Subclasse Moto
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, ano, tipoDeGuidao) {
        var _this = _super.call(this, marca, modelo, ano) || this;
        _this.tipoDeGuidao = tipoDeGuidao;
        return _this;
    }
    Moto.prototype.exibirInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano, ", Guid\u00E3o: ").concat(this.tipoDeGuidao));
    };
    return Moto;
}(Veiculo));
// Teste
var carro1 = new Carro("Honda", "Civic", 2022, 4);
var moto1 = new Moto("Bajaj", "Dominar 400", 2021, "Esportivo");
carro1.exibirInfo();
moto1.exibirInfo();
