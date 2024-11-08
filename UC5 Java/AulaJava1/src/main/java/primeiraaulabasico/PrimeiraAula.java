package primeiraaulabasico;
import java.util.Scanner;

public class PrimeiraAula {
    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in); // entrada de dados pelo teclado

        System.out.println("Entre com o primeiro numero: ");
        int numero = sc.nextInt();
        System.out.println("Entre com o segundo numero: ");
        int numero2 = sc.nextInt();

        int soma = numero + numero2;

        System.out.println("O número é " + numero);
        System.out.println("O segundo número é: " + numero2);
        System.out.println("A soma dos números é: " + soma);
    }
}
