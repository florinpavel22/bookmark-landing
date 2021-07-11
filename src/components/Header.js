import Container from "./subcomponents/Container";
import Navbar from "./Navbar";
import '../styles/header.css';

const Header = () => {
    return ( 
        <header>
            <Container>
                <Navbar />
            </Container>
        </header>
     );
}
 
export default Header;