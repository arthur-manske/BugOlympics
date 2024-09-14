package questao03;

public class ImpostosSalario {

    //Calcula INSS
    public Double[] descImposto(double salarioBase, double dependentes) {
        Double descontos[] = new Double[3];
        double descontoInss = 0;
        double descontoIrrf = 0;
        double descontoDependente;
        double aliquota;
        double deducao;
        double salarioLiquido;

        // Desconto do INSS
        // Valor do INSS = Salario base * aliquota INSS - deducao
        if (salarioBase > 0 && salarioBase <= 1412) {
            aliquota = 0.075;
            deducao = 0;
            descontoInss = (salarioBase * aliquota - deducao);
        } else if (salarioBase > 1412 && salarioBase <= 2666.68) {
            aliquota = 0.09;
            deducao = 21.18;
            descontoInss = (salarioBase * aliquota - deducao);
        } else if (salarioBase > 2666.68 && salarioBase <= 4000.03) {
            aliquota = 0.12;
            deducao = 101.18;
            descontoInss = (salarioBase * aliquota - deducao);
        } else if (salarioBase > 4000.04 && salarioBase <= 7786.02) {
            aliquota = 0.14;
            deducao = 181.18;
            descontoInss = (salarioBase * aliquota - deducao);
        }else if(salarioBase > 7786.02 && salarioBase <= 8100){
            descontoInss = 938.82;
        }else if(salarioBase > 8100) {
            descontoInss = 908.86;
        }

        // Desconto do IRRF
        // Valor IRRF = (salário base – desconto do INSS – valor abatimento por dependente)* alíquota IRRF – dedução
        descontoDependente = dependentes * 189.59;

        if (salarioBase > 0 && salarioBase <= 2112.00) {
            aliquota = 0.0;
            deducao = 0.0;
            descontoIrrf = ((salarioBase - descontoInss - descontoDependente) * aliquota) - deducao;
            if (descontoIrrf <= 0) {
                descontoIrrf = 0;
            }
        } else if (salarioBase > 2112.00 && salarioBase <= 2826.65) {
            aliquota = 0.075;
            deducao = 158.40;
            descontoIrrf = ((salarioBase - descontoInss - descontoDependente) * aliquota) - deducao;
            if (descontoIrrf <= 0) {
                descontoIrrf = 0;
            }
        } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
            aliquota = 0.15;
            deducao = 370.40;
            descontoIrrf = ((salarioBase - descontoInss - descontoDependente) * aliquota) - deducao;
            if (descontoIrrf <= 0) {
                descontoIrrf = 0;
            }
        } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
            aliquota = 0.225;
            deducao = 651.73;
            descontoIrrf = ((salarioBase - descontoInss - descontoDependente) * aliquota) - deducao;
            if (descontoIrrf <= 0) {
                descontoIrrf = 0;
            }
        } else if (salarioBase > 4664.68) {
            aliquota = 0.275;
            deducao = 884.96;
            descontoIrrf = ((salarioBase - descontoInss - descontoDependente) * aliquota) - deducao;
            if (descontoIrrf <= 0) {
                descontoIrrf = 0;
            }
        }

        salarioLiquido = salarioBase - descontoInss - descontoIrrf;

        descontos[0] = descontoInss;
        descontos[1] = descontoIrrf;
        descontos[2] = salarioLiquido;

        return descontos;
    }
}
