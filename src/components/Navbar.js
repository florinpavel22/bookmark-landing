import Button from "./subcomponents/Button";
import logo from '../img/logo-bookmark.svg';
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    return ( 
        <nav>
            <img src={logo} alt="Logo" className="Company Logo" />
            <ul className="desktop-menu">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li><Button text="Login" primary={false} /></li>
            </ul>
            <MobileMenu />
        </nav>
     );
}
 
export default Navbar;