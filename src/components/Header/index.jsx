import { Link } from 'react-router-dom'
import logo from '../../assets/images/LOGO.png';
import '../styles/Header.css'

function Header() {
    return (
        <>
        <img src={logo} alt='Logo'>
        </img>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
        </>
    )
}

export default Header