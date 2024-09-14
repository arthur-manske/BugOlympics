package desafio6;

import java.util.Scanner;

public class Principal {

    public static void main(String[] args) {

        Scanner readKeyboard = new Scanner(System.in);

        double numMeses;
        double taxaJurosMensal;
        double valorDepositoRegular;
        double valorObtidoFinal;

        System.out.println("CALCULADORA :: DEPOSITOS REGULARES \n\n");

        System.out.print("Informe o número de meses da aplicação: ");
        numMeses = readKeyboard.nextDouble();
        System.out.print("Informe a taxa de juros mensal (%): ");
        taxaJurosMensal = readKeyboard.nextDouble();
        System.out.print("Informe o valor do deposito regular: R$ ");
        valorDepositoRegular = readKeyboard.nextDouble();

        AplicDepositoRegular op = new AplicDepositoRegular();
        valorObtidoFinal = op.calcAplicDepositosReg(numMeses, taxaJurosMensal, valorDepositoRegular);

        System.out.println("Valor obtido ao final da aplicação: R$ " + String.format("%.2f", valorObtidoFinal));

        readKeyboard.close();
    }
}
