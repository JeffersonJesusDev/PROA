import styles from "../css/Home.module.css"
import Quadrado from "./Quadrado"
import ImagemQuadrado from "../imagens/loja.jpeg.jpeg"

function Home() {
    return (
        <section className={styles.home}>
            <Quadrado >
                <div className={styles.dentro}>
                    <h1>Nossa Loja - Instrumentos Musicais</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae modi laboriosam quis, quam voluptatibus a illo ab maxime ipsam quas officiis veritatis necessitatibus est repellendus cupiditate nam explicabo! Error.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae modi laboriosam quis, quam voluptatibus a illo ab maxime ipsam quas officiis veritatis necessitatibus est repellendus cupiditate nam explicabo! Error.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit recusandae modi laboriosam quis, quam voluptatibus a illo ab maxime ipsam quas officiis veritatis necessitatibus est repellendus cupiditate nam explicabo! Error.
                    </p>

                </div>
            </Quadrado>

            <Quadrado>
                <img src={ImagemQuadrado} alt="" />
            </Quadrado>
        </section>
    )
}
export default Home