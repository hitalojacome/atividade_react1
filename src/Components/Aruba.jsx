import styles from './Aruba.module.css'
import Logo from './assets/logo.png'

function Aruba() {
    return (
        <div className={styles.Aruba}>
            <div className={styles.info}>
                <h1>Conheça Aruba!.</h1>
                <p>Aruba é uma ilha caribenha que oferece algumas das praias mais bonitas do mundo. Com águas cristalinas e areias brancas, é o destino ideal para quem quer relaxar e desfrutar de atividades ao ar livre, como mergulho, windsurf e passeios de barco.</p>
                <img src={Logo} alt='Logo viagens' className={styles.logo} />
            </div>
        </div>
    );
}

export default Aruba