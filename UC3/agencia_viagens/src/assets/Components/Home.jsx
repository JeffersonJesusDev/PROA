import styles from '../css/Home.module.css'

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}>

            </div>
            <div className={styles.texto_lado}>
                <h1>Encontre aqui a viagem dos seus sonhos !!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sint saepe officiis eaque doloribus, reiciendis sunt ex quibusdam quasi minus distinctio obcaecati architecto vero quaerat delectus non id. Minus, nisi!</p>
            </div>
        </section>

    )
}

export default Home