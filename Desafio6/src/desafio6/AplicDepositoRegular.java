package desafio6;

public class AplicDepositoRegular {

    public double calcAplicDepositosReg(double numMeses, double taxaJurosMensal, double valorDepRegular) {
        // Convertendo a taxa de juros pra decimal:
        taxaJurosMensal = taxaJurosMensal / 100;

        // Consertando a fórmula:
        double valorObtidoFinal = valorDepRegular * ((Math.pow(1 + taxaJurosMensal, numMeses) - 1) / taxaJurosMensal) * (1 + taxaJurosMensal);

        return valorObtidoFinal;
    }
}
