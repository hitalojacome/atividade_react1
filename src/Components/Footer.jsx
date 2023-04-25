import styles from './Footer.module.css'
import Insta from './assets/insta.jfif'
import Face from './assets/face.jfif'
import TikTok from './assets/tiktok.png'
import Wpp from './assets/whtas.png'

function Footer() {
    const tel='(11) 99999-0000'
    
    return (
        <div className={styles.footer}>
            <h2>Siga-nos em nossas redes sociais</h2>
            <div className={styles.redes}>
                <img src={Insta} alt='logo Instagram' className={styles.social}/>
                <img src={Face} alt='logo Facebook' className={styles.social}/>
                <img src={TikTok} alt='logo TikTok' className={styles.social}/>
                <img src={Wpp} alt='logo Whatsapp' className={styles.socialW}/>
            </div>
            <h3>Telefone de contato: {tel}</h3>
        </div>
    );
}

export default Footer