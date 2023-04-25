import styles from './Escocia.module.css'
import Logo from './assets/logo.png'

function Escocia() {
    return (
        <div className={styles.Escocia}>
            <div className={styles.info}>
                <h1>Venha Explorar Esse lugar incrível: Escócia!</h1>
                <p>A Escócia é um país incrível localizado na parte norte do Reino Unido, famoso por suas belas paisagens naturais, história rica e cultura vibrante. Com atrações turísticas que vão desde castelos medievais e cidades históricas até montanhas, lagos e ilhas deslumbrantes, a Escócia oferece algo para todos os gostos.</p>
                <img src={Logo} alt='Logo viagens' className={styles.logo} />
            </div>
        </div>
    );
}

export default Escocia