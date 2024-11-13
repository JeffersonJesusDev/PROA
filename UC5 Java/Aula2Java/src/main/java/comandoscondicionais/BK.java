package comandoscondicionais;

import java.util.Scanner;

public class BK {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Escolha um combo: ");

        String msg;

        int combo = sc.nextInt();

        switch (combo) {
            case 1: msg = "King Costela: Sanduíche no pão de brioche com hambúrguer de carne bovina grelhada, 2 fatias de queijo sabor cheddar, carne de costela bovina desfiada, chutney de cebola roxa, cebola crispy, 3 anéis de onion rings e maionese de alho.";
            break;
            case 2: msg = "X Ratão: Sanduiche no pão duro com hambúrguer de carne bonvina, 2 ovos, salada, tomate, 4 fatias de queijo";
            break;
            case 3: msg = "X Ratão Egg: Sanduiche no pão com brioche, 3 ovos, presunto queijo, salada tomate, cebola, pipino";
            break;
            case 4: msg = "X Come Agora: Sanduiche no pão com salsicha, pure de batata";
            break;
            case 5: msg = "X Tudão: tem todos os outros lanche dentro dele";
            break;
            default: msg = "Escolha números de 1 a 5";
        }

        System.out.println(msg);
    }
}
