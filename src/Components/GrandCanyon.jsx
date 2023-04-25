import styles from './GrandCanyon.module.css'
import Logo from './assets/logo.png'

function GrandCanyon() {
    return (
        <div className={styles.GrandCanyon}>
            <div className={styles.info}>
                <h1>Embarque nessa viagem de aventura e beleza. Conheça o Grand Canyon!</h1>
                <p>O Grand Canyon é um dos mais famosos parques nacionais dos Estados Unidos e um dos maiores desfiladeiros do mundo. Localizado no estado do Arizona, o Grand Canyon é famoso por suas deslumbrantes paisagens de rochas vermelhas esculpidas pela ação do rio Colorado ao longo de milhares de anos. </p>
                <img src={Logo} alt='Logo viagens' className={styles.logo} />
            </div>
        </div>
    );
}

export default GrandCanyon