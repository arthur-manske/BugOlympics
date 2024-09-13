const rl = require('readline-sync');

// Lista de palavras para o jogo
const palavras = ["gato", "pato", "burro", "baleia", "polvo"];

// Escolhendo uma palavra aleatória da lista
const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

// Configurando as variáveis do jogo
let tentativasRestantes = 6;
let letrasAdivinhadas = [];
let letrasErradas = [];

// Criando a palavra oculta com espaços para letras não adivinhadas
let palavraOculta = Array(palavraEscolhida.length).fill("_");

// Mostra o estado inicial do jogo
console.log("Bem-vindo ao jogo da forca!");
console.log(`A palavra tem ${palavraEscolhida.length} letras.`);
console.log(`Palavra: ${palavraOculta.join(" ")}`);

// Loop principal do jogo
while (tentativasRestantes > 0 && palavraOculta.includes("_")) {
    // Pedindo ao usuário para adivinhar uma letra
    let letra = rl.question("Adivinhe uma letra: ").toLowerCase();
  
    // Verifica se a letra já foi adivinhada
    if (letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra)) {
      console.log("Você já tentou essa letra. Tente outra.");
      continue;
    }
  
    // Verifica se a letra está na palavra
    if (palavraEscolhida.includes(letra)) {
      letrasAdivinhadas.push(letra);
  
      // Atualiza a palavra oculta com a letra correta
      for (let i = 0; i < palavraEscolhida.length; i++) {
        if (palavraEscolhida[i] === letra) {
          palavraOculta[i] = letra;
        }
      }
    } else {
      letrasErradas.push(letra);
      tentativasRestantes--;
      console.log("Letra incorreta!");
    }
  
    // Mostra o estado atual do jogo
    console.log(`\nPalavra: ${palavraOculta.join(" ")}`);
    console.log(`Tentativas restantes: ${tentativasRestantes}`);
    console.log(`Letras erradas: ${letrasErradas.join(", ")}`);
  }

    // Resultado do jogo
if (!palavraOculta.includes("_")) {
  console.log("\nParabéns, você ganhou!");
} else {
  console.log(`\nVocê perdeu! A palavra era: ${palavraEscolhida}`);
}
