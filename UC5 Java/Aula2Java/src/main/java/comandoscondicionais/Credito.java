package comandoscondicionais;

import java.util.Scanner;

public class Credito {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite o valor do seu salário: ");
        System.out.println("Entre com o primeiro salario");
        double salario1 = sc.nextDouble();
        System.out.println("Entre com o segundo salario");
        double salario2 = sc.nextDouble();
        System.out.println("Entre com o terceiro salario");
        double salario3 = sc.nextDouble();
        System.out.println("Entre com o quarto salario");
        double salario4 = sc.nextDouble();
        System.out.println("Entre com o quinto salario");
        double salario5 = sc.nextDouble();
        System.out.println("Entre com o sexto salario");
        double salario6 = sc.nextDouble();

        double media = salario1 + salario2 + salario3 + salario4 + salario5 + salario6 / 6;

        if (media <= 500){
            System.out.println("Nenhum crédito");
        } else if (media <= 5) {
            
        }


    }
}
