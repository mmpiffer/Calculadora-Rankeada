const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    
    let nivel = "";

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

rl.question("Digite o número de vitórias: ", (vitorias) => {
    rl.question("Digite o número de derrotas: ", (derrotas) => {
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        let resultado = calcularNivel(vitorias, derrotas);

        console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

        rl.close();
    });
});
