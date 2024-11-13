package comandoscondicionais;

import java.util.Scanner;

public class IMC {
    public static void main(String[] args) {
        System.out.println("Calculo de IMC");

        Scanner sc = new Scanner(System.in);

        System.out.println("Descubra o seu IMC:");

        System.out.println("Qual o seu peso: ");
        float peso = sc.nextFloat();

        System.out.println("Qual o seu altura: ");
        float altura = sc.nextFloat();

        float imc = peso / (altura * 2);

        if (imc <= 18.5){
            System.out.println("Abaixo do peso");
        } else if (imc >= 18.5 && imc <= 24.9){
            System.out.println("Peso ideal, parabéns");
        } else if (imc >= 25.0 && imc <= 29.9){
            System.out.println("Levemente acima do peso");
        } else if (imc >= 30.0 && imc <= 34.9){
            System.out.println("Obesidade Grau I");
        } else if (imc >= 35.0 && imc <= 39.9){
            System.out.println("Obesidade Grau II (Severa)");
        } else {
            System.out.println("Obesidade Grau III (morbida)");
        }

    }
}
