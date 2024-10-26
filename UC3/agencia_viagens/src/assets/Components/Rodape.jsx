import styles from '../css/Rodape.module.css'
import insta from '../imagens/insta.jpeg'
import face from '../imagens/face.jpeg'
import tiktok from '../imagens/tiktok.png'
import whats from '../imagens/whats.jpeg'

function Rodape(){
    return(
        <footer className={styles.corpo}>
            <h3>Siga-nos nas redes sociais</h3>
            <div clasName={styles.icones}>
                <img src={insta} alt="instagram" />
                <img src={face} alt="facebook" />
                <img src={tiktok} alt="tiktok" />
                <img src={whats} alt="whats" />
            </div>
            <h3>Telefone de Contato - (11) 4002-8922</h3>
        </footer>
        
    )
}

export default Rodape