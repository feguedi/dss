import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'

export default () => (
    <Navbar bg="dark" expand="lg" color="light">
        <NavbarBrand className="mr-auto"><Nav.Link href="/">DSS</Nav.Link></NavbarBrand>
        <Nav.Item><Nav.Link href="/data">Datos</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="/about">Acerca de</Nav.Link></Nav.Item>
    </Navbar>
)