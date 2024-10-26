import styles from "../css/Instrumentos.module.css"
import QuadradoViolao from "./QuadradoViolao"
import violaoImage from "../imagens/violao.jpg"
function Instrumentos(){

    return(
        <section className={styles.quadradoBranco}>
          <QuadradoViolao 
          image={violaoImage} 
          desc="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          text="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          price="989,50"/>

          <QuadradoViolao 
          image={violaoImage} 
          desc="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          text="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          price="989,50"/>

          <QuadradoViolao 
          image={violaoImage} 
          desc="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          text="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          price="989,50"/>
          
          <QuadradoViolao 
          image={violaoImage} 
          desc="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          text="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" 
          price="989,50"/>

        </section>



    )

}

export default Instrumentos