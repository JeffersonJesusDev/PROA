package comandoscondicionais;

import java.util.Scanner;

public class Switch1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Entre com um número: ");
        int farol = sc.nextInt();
        String mensagem;

        switch (farol){
            case 1: mensagem = "Farol verde! Siga!";
            break;
            case 2: mensagem = "Farol amarelo! Atenção, reduza velocidade!";
            break;
            case 3: mensagem = "Farol vermelho! Pare!";
            break;
            default: mensagem = "Numero incorreto/inválido!";
        }

        System.out.println(mensagem);
    }
}
