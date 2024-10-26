import styles from "../css/Endereco.module.css"
import Quadrado from "./Quadrado"

function Endereco(){

    return(
        <section className={styles.endereco}>
            <Quadrado >
                <div className={styles.dentro1}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117062.12576613182!2d-46.839814456640624!3d-23.5256163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef87146b5a9eb%3A0xcd471d12c7659b84!2sGuimarães%20Comercial%20-%20Instrumentos%20Musicais%2C%20Acessórios%20e%20Livros%20Musicais!5e0!3m2!1spt-BR!2sbr!4v1723820798864!5m2!1spt-BR!2sbr" width="613" height="420" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Quadrado>

            <Quadrado>
                <div className={styles.dentro2} >
                <h1>Nossa Loja - Instrumentos Musicais</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae modi laboriosam quis, quam voluptatibus a illo ab maxime ipsam quas officiis veritatis necessitatibus est repellendus cupiditate nam explicabo! Error.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae modi laboriosam quis, quam voluptatibus a illo ab maxime ipsam quas officiis veritatis necessitatibus est repellendus cupiditate nam explicabo! Error.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae modi laboriosam quis, quam voluptatibus a illo ab maxime ipsam quas officiis veritatis necessitatibus est repellendus cupiditate nam explicabo! Error.
                    </p>
                </div>
            </Quadrado >
        </section>


    )
}

export default Endereco