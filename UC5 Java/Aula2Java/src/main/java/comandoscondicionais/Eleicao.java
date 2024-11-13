package comandoscondicionais;

import java.util.Scanner;

public class Eleicao {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Entre com a sua idade para saber se pode votar: ");

        int idade = sc.nextInt();

        if (idade >= 18 && idade <= 69) {
            System.out.println("Pode votar, voto é obrigatório");
        } else if (idade >= 16 && idade >= 70) {
            System.out.println("Voto opcional");
        } else {
            System.out.println("Não pode votar");
        }
    }
}
