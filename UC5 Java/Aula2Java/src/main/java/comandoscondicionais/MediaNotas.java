package comandoscondicionais;

import java.util.Scanner;

public class MediaNotas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Entre com a primeira nota: ");
        float n1 = sc.nextFloat();

        System.out.println("Entre com a segunda nota: ");
        float n2 = sc.nextFloat();

        System.out.println("Entre com a terceira nota: ");
        float n3 = sc.nextFloat();

        System.out.println("Entre com a quarta nota: ");
        float n4 = sc.nextFloat();

        float media = (n1 + n2 + n3 + n4) / 4;

        System.out.println("Media: " + media);


        if (media >= 7){
            System.out.println("Aprovado");
        } else if (media >= 5) {
            System.out.println("Está de recuperação");
        } else {
            System.out.println("Reprovado");
        }
    }

}
