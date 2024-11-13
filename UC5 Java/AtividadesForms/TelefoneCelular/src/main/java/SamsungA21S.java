public class SamsungA21S {
    public static void main(String[] args) {

        ReprodutorMusical reprodutorMusical = new ReprodutorMusical("Ed, Sheran");
        NavegarPelaInternet navegarPelaInternet = new NavegarPelaInternet("www.proa.com.br");

        String musica = reprodutorMusical.musica;
        reprodutorMusical.selecionarMusica(musica);
        System.out.println(reprodutorMusical.musica);
        reprodutorMusical.tocar();

        String site = navegarPelaInternet.site;
        System.out.println(site);


    }

}
