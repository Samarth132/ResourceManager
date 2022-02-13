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
                    <Nav.Link href="/create">Create</Nav.Link>
                    <NavDropdown title="Documents" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/resources">Course Work</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/notices">Notices</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;