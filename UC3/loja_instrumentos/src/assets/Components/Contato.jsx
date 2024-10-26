import styles from "../css/Contato.module.css"
import Quadrado from "./Quadrado"
import whats from "../imagens/whats.jpg"
import insta from "../imagens/insta.jpg"
import face from "../imagens/face.jpg"
function Contato(){

    return(
        <section className={styles.contato}>
            
            <Quadrado customClass='fundoBranco'>
            <div className={styles.dentro3}>
          <form className={styles.formulario}>
            <label htmlFor="nome">Entre com o seu nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome aqui"
              required
              className={styles.inputNome}
            />

            <label htmlFor="email">Entre com o seu e-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email aqui"
              required
              className={styles.inputEmail}
            />

            <label htmlFor="mensagem"></label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Faça seu pedido por aqui"
              required
              className={styles.textareaMensagem}
            ></textarea>

            <button type="submit" className={styles.btnEnviar}>
              Enviar
            </button>
          </form>
        </div>
            </Quadrado>

            <Quadrado customClass='fundoBranco'>
                <div className={styles.dentro4}>
                    <h2>Acesse também nossas redes sociais</h2>
                    <img src={whats} alt="" />
                    <img src={insta} alt="" />
                    <img src={face} alt="" />

                </div>

            </Quadrado>

        </section>


    )
}
export default Contato