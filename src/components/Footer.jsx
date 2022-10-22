import logo from '../assets/images/footerlogo.png'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
        <img src={logo} alt='Logo'>
        </img>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer