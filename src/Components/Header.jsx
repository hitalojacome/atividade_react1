import styles from './Header.module.css'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <div className={styles.Header}>
            <div className={styles.logo}></div>
            <ul className={styles.cidades}>
                <li><Link to='/'style={{ textDecoration: 'none', color: '#000'}}>Home</Link></li>
                <li><Link to='/GrandCanyon'style={{ textDecoration: 'none', color: '#000'}}>Grand Canyon</Link></li>
                <li><Link to='/Escocia'style={{ textDecoration: 'none', color: '#000'}}>Escocia</Link></li>
                <li><Link to='/Muralha'style={{ textDecoration: 'none', color: '#000'}}>Muralha da China</Link></li>
                <li><Link to='/Aruba'style={{ textDecoration: 'none', color: '#000'}}>Aruba</Link></li>
            </ul>
            <div className={styles.busca}>
                <input type='search' placeholder='Digite uma cidade'/>
            </div>
        </div>
    );
}

export default Header