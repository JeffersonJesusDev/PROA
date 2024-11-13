public class NavegarPelaInternet {

    String site;

    public NavegarPelaInternet(String site) {
        this.site = site;
    }

    public void exibirPagina(String url) {
        System.out.println("Exibindo página da web: " + url);
    }

    public void adicionarNovaAba() {
        System.out.println("Abrindo nova aba do navegador.");
    }

    public void atualizarPagina() {
        System.out.println("Atualizando página da web.");
    }
}
