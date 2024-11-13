public class SamsungA21S {
    public static void main(String[] args) {

        ReprodutorMusical reprodutor = new ReprodutorMusical();
        AparelhoTelefonico telefone = new AparelhoTelefonico();
        NavegarPelaInternet navegar = new NavegarPelaInternet();

        reprodutor.selecionarMusica("Musica Ed Sheroon");

        reprodutor.tocar();

        reprodutor.pausarMusica();

        telefone.ligar(1231231231);

        telefone.atender();

        telefone.IniciarCorreioVoz();

        navegar.exibirPagina("www.proa.com.br");

        navegar.adicionarNovaAba();

        navegar.atualizarPagina();
    }

}
