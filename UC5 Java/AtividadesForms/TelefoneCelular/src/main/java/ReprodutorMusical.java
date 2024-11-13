public class ReprodutorMusical {

    String musica;

    public ReprodutorMusical(String musica) {
        this.musica = musica;
    }

    public void tocar(){
        System.out.println("Tocando musica");
    }
    public void pausarMusica(){
        System.out.println("Pausando musica");
    }
    public void selecionarMusica(String musica){
        System.out.println("Musica selecionada: ");
    }
}
