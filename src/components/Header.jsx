import { Link } from "react-router-dom";
import "../assets/css/header.css"
import logo from "../../public/images/logo.jpeg"
import user from "../../public/images/user.png"
import cart from "../../public/images/cart.png"
export const Header = () => {
    return (
            <header className="Header">
                <a>
                    <img src={logo}/>
                </a>
                <nav className="nav">
                    <Link className="link" to="/">INICIO</Link>
                    <Link className="link" to="/conocenos">CONOCENOS</Link>
                    <Link className="link" to="/hombre">HOMBRE</Link>
                    <Link className="link" to="/mujer">MUJER</Link>
                    <Link className="link" to="/contacto">CONTACTO</Link>
                </nav>
                <div className="shoppingUser">
                    <div>
                        <img src={user}/>
                    </div>
                    <div className="cart">
                        <img src={cart}/>
                        <span>0</span>
                    </div>
                </div>
                
            </header>
    )
}