package primeiraaulabasico;

import java.util.Scanner;

public class Atividade2Java {
    public static void main(String[] args) {
        // entrar com 4 notas pelo teclado e trazer a media delas
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite 4 notas");
        int nota1 = sc.nextInt();
        int nota2 = sc.nextInt();
        int nota3 = sc.nextInt();
        int nota4 = sc.nextInt();

        int soma = nota1 + nota2 + nota3 + nota4;
        int media = soma / 4;

        System.out.println("A média é: " + media);

    }
}
