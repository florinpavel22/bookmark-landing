import Container from "./subcomponents/Container";
import logo from '../img/logo-bookmark-white.svg';
import facebook from '../img/icon-facebook.svg';
import twitter from '../img/icon-twitter.svg';
import '../styles/footer.css';

const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <ul>
                    <li className="logo"><img src={logo} alt="Company logo" /></li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>

                <div className="socials">
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;