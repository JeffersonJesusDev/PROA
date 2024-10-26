import styles from "../css/Quadrado.module.css"

function Quadrado(props){

    return(
        <div className={`${styles.quadrado} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Quadrado