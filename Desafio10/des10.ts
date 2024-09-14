// Descubra como implementar corretamente a classe Lobisomem

interface Criatura {
    aparecer(): void;
    atacar(): void;
}

class Monstro implements Criatura {
    aparecer(): void {
        console.log("Monstro apareceu.");
    }

    atacar(): void {
        console.log("Monstro atacando.");
    }
}

class Lobisomem extends Monstro {
    aparecer(): void {
        console.log("Lobisomem apareceu sob a lua cheia");
    }

    atacar(): void {    
        console.log("Lobisomem ataca ferozmente.");
    }
}


function gerenciarCriatura(criatura: Criatura): void {
    criatura.aparecer();
    criatura.atacar();
}

const monstro = new Monstro();
const lobisomem = new Lobisomem();

gerenciarCriatura(monstro);
gerenciarCriatura(lobisomem); 