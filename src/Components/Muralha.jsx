import styles from './Muralha.module.css'
import Logo from './assets/logo.png'

function Muralha() {
    return (
        <div className={styles.Muralha}>
            <div className={styles.info}>
                <h1>A Muralha da China.</h1>
                <p>Construída ao longo de vários séculos, a muralha tem mais de 21 mil quilômetros de extensão e é uma das maiores maravilhas arquitetônicas do mundo. Hoje é um dos destinos turísticos mais populares do país, com visitantes podendo caminhar sobre suas muralhas, admirar suas torres de vigia e aprender sobre a rica história e cultura chinesas.</p>
                <img src={Logo} alt='Logo viagens' className={styles.logo} />
            </div>
        </div>
    );
}

export default Muralha