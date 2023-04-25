import styles from './Home.module.css'
import Mala from './assets/mala.jpg'

function Home(){
    return(
        <div className={styles.home}>
            <div className={styles.imagemHome}>
                <img src={Mala} alt='Mala de viagem' className={styles.mala}/>
            </div>
            <div className={styles.textoHome}>
                <h1>Encontre aqui a viagem dos seus sonhos!!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritats accusamus aperiam consequuntur saep similique quas nulla obcaecati impedit. Ipsum placeat animi sed laborum autem voluptas libero enim voluptatem eaque natus.</p>
            </div>
        </div>
    );
}

export default Home