import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'

export default () => (
    <Navbar bg="dark" expand="lg" color="light">
        <Container>
            <NavbarBrand className="mr-auto"><Nav.Link className="text-white" href="/">DSS</Nav.Link></NavbarBrand>
            <Nav.Item><Nav.Link className="text-white" href="/data">Datos</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link className="text-white" href="/about">Acerca de</Nav.Link></Nav.Item>
        </Container>
    </Navbar>
)