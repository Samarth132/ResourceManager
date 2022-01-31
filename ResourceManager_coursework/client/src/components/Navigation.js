import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import rlogo from './rlogo.png'

const Navigation = () => {
    return ( 
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand href="/" className="text-danger text-center px-0"><img className="brandIcon img-thumbnail" src={rlogo} alt="brand icon"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/#home">Home</Nav.Link>
                    <NavDropdown title="Documents" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Resources</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Notices</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;