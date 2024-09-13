"use strict";
//Descubra o erro no sistema e corrija
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var EstadoLivro;
(function (EstadoLivro) {
    EstadoLivro["Disponivel"] = "Dispon\u00EDvel";
    EstadoLivro["Emprestado"] = "Emprestado";
})(EstadoLivro || (EstadoLivro = {}));
var LivroProibido = /** @class */ (function () {
    function LivroProibido(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = EstadoLivro.Disponivel;
    }
    LivroProibido.prototype.atualizarEstado = function (estado) {
        this.estado = estado;
    };
    LivroProibido.prototype.emprestar = function () {
        if (this.estado === EstadoLivro.Emprestado) {
            console.log("".concat(this.titulo, " j\u00E1 est\u00E1 emprestado e n\u00E3o pode ser emprestado novamente."));
            this.estado = EstadoLivro.Disponivel;
        }
        else {
            console.log("".concat(this.titulo, " foi emprestado com sucesso."));
            this.estado = EstadoLivro.Emprestado;
        }
    };
    LivroProibido.prototype.devolver = function () {
        if (this.estado === EstadoLivro.Disponivel) {
            console.log("".concat(this.titulo, " n\u00E3o est\u00E1 emprestado, ent\u00E3o n\u00E3o pode ser devolvido."));
            this.estado = EstadoLivro.Emprestado;
        }
        else {
            console.log("".concat(this.titulo, " foi devolvido!"));
            this.estado = EstadoLivro.Disponivel;
        }
    };
    LivroProibido.prototype.getTitulo = function () {
        return this.titulo;
    };
    LivroProibido.prototype.getAutor = function () {
        return this.autor;
    };
    LivroProibido.prototype.getEstado = function () {
        return this.estado;
    };
    return LivroProibido;
}());
// Criando o "banco de dados" da biblioteca
var biblioteca = [
    new LivroProibido("O Grimório das Sombras", "Mestre Arcano"),
    new LivroProibido("O Livro das Runas", "Sábio Místico"),
    new LivroProibido("O Códice dos Magos", "Ancião Esotérico"),
    new LivroProibido("O Manual das Feitiçarias", "Feiticeiro Anônimo")
];
// Função para exibir o menu e processar a escolha do usuário
function menuBiblioteca() {
    while (true) {
        console.log("\n--- Biblioteca Arcana e Proibida ---");
        console.log("Escolha uma opção:");
        console.log("1. Listar livros");
        console.log("2. Emprestar livro");
        console.log("3. Devolver livro");
        console.log("4. Sair");
        var escolha = readlineSync.question("Digite o número da opção desejada: ");
        switch (escolha) {
            case '1':
                listarLivros();
                break;
            case '2':
                emprestarLivro();
                break;
            case '3':
                devolverLivro();
                break;
            case '4':
                console.log("Saindo do sistema...");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}
function listarLivros() {
    console.log("\nLivros disponíveis na biblioteca:");
    biblioteca.forEach(function (livro, index) {
        console.log("".concat(index + 1, ". T\u00EDtulo: \"").concat(livro.getTitulo(), "\", Autor: ").concat(livro.getAutor(), ", Estado: ").concat(livro.getEstado()));
    });
}
function emprestarLivro() {
    listarLivros();
    var escolha = Number(readlineSync.question("\nDigite o número do livro que deseja emprestar: "));
    var livro = biblioteca[escolha - 1];
    if (livro) {
        livro.emprestar();
    }
    else {
        console.log("Número de livro inválido.");
    }
}
function devolverLivro() {
    listarLivros();
    var escolha = Number(readlineSync.question("\nDigite o número do livro que deseja devolver: "));
    var livro = biblioteca[escolha - 1];
    if (livro) {
        livro.devolver();
    }
    else {
        console.log("Número de livro inválido.");
    }
}
menuBiblioteca();
