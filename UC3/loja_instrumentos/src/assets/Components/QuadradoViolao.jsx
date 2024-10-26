import styles from "../css/QuadradoViolao.module.css"

function QuadradoViolao({image, desc, text, price}){
    return(
        <div className={styles.quadradosViolao}>
            <img src={image} alt={desc} />
            <p className={styles.texto}>
                {text}
            </p>
            <span>R$ {price}</span>

        </div>

    )
}

export default QuadradoViolao