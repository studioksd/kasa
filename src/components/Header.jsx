import { Link } from 'react-router-dom'
import logo from '../assets/images/LOGO.png';
import '../styles/Header.css'

function Header() {
    return (
        <div className='header'>

        <img className='headerimg' src={logo} alt='Logo'>
        </img>
        <nav>
            <Link to="/" className='navlink'><div className='navlink-txt'>Accueil</div></Link>
            <Link to="/about" className='navlink'><div className='navlink-txt'>A Propos</div></Link>
        </nav>

        </div>
    )
}

export default Header