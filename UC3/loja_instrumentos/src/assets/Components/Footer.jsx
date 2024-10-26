import styles from "../css/Footer.module.css"
import whats from "../imagens/whats.jpg"
import insta from "../imagens/insta.jpg"
import face from "../imagens/face.jpg"
function Footer() {

    return (
        <footer className={styles.Footer}>
            <div className={styles.dentro5}>
                <h2>Nossa Loja - Instrumentos musicais</h2>
                <p>Rua Tito, 54 - Lapa</p>
                <p>São Paulo - Brasil</p>

            </div>
            <div className={styles.raphazikavirus}>
                <img src={whats} alt="" />
                <img src={insta} alt="" />
                <img src={face} alt="" />
            </div>

        </footer>

    )
}

export default Footer