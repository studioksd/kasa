import { Link } from 'react-router-dom'
import logo from '../assets/images/LOGO.png';
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>

        <img src={logo} alt='Logo'>
        </img>
        <nav>
            <Link to="/" className='navlink'>Accueil</Link>
            <Link to="/about" className='navlink'>A Propos</Link>
        </nav>

        </div>
    )
}

export default Header