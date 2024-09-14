
package questao03;

import java.util.Scanner;


public class Principal {

    public static void main(String[] args) {
        Scanner readKeyboard = new Scanner(System.in);
        double salarioBase = 0;
        double dependentes = 0;
        Double resultados[] = new Double[2];

        System.out.println("::: CALCULADORA DE DESCONTO EM SALARIOS :::");
        System.out.println("Informe o seu salario base: ");
        salarioBase = readKeyboard.nextDouble();

        System.out.println("Informe a quantidade de dependentes: ");
        dependentes = readKeyboard.nextDouble();

        ImpostosSalario calculo = new ImpostosSalario();
        resultados = calculo.descImposto(salarioBase, dependentes);

        System.out.println("Valor descontado de INSS: R$" + String.format("%.2f", resultados[0]));
        System.out.println("Valor descontado de IRRF: R$" + String.format("%.2f", resultados[1]));
        System.out.println("Seu salário líquido sera de R$: " + String.format("%.2f", resultados[2]));

    }
}
