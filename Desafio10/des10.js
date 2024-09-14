// Descubra como implementar corretamente a classe Lobisomem
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
var Monstro = /** @class */ (function () {
    function Monstro() {
    }
    Monstro.prototype.aparecer = function () {
        console.log("Monstro apareceu.");
    };
    Monstro.prototype.atacar = function () {
        console.log("Monstro atacando.");
    };
    return Monstro;
}());
var Lobisomem = /** @class */ (function (_super) {
    __extends(Lobisomem, _super);
    function Lobisomem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lobisomem.prototype.aparecer = function () {
        console.log("Lobisomem apareceu sob a lua cheia");
    };
    Lobisomem.prototype.atacar = function () {
        console.log("Lobisomem atacando com arma.");
    };
    return Lobisomem;
}(Monstro));
function gerenciarCriatura(criatura) {
    criatura.aparecer();
    criatura.atacar();
}
var monstro = new Monstro();
var lobisomem = new Lobisomem();
gerenciarCriatura(monstro);
gerenciarCriatura(lobisomem);
