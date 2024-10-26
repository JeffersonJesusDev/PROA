import Logo from '../imagens/viagens.jpg'
import Lupa from '../imagens/lupa.png'
import styles from '../css/Header.module.css'
 
function Header(){
 
    return(
        <header className={styles.content}>
            <img src={Logo} alt="Logo"  className={styles.logo} />
            <nav className={styles.menu}>
                <ul>
                    <li>Home</li>
                    <li>Escócia</li>
                    <li>Grand Canyon</li>
                    <li>Muralhas da China</li>
                    <li>Aruba</li>
                </ul>
            </nav>
            <div className={styles.login}>
                <input type="search" />
            </div>
 
            <img src={Lupa} alt="Lupa" className={styles.lupa} />

            
        </header>
    )
}
export default Header