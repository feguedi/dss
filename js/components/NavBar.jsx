import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default () => (
    <Navbar bg="light" expand="md">
        <Navbar.Brand href="/">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-ssd">
            <Nav className="mr-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/about">Acerca de</Nav.Link>
                <NavDropdown.Item href="/none">Error 1</NavDropdown.Item>
                <NavDropdown.Item href="/none">Error 2</NavDropdown.Item>
                <NavDropdown.Item href="/none">Error 3</NavDropdown.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)