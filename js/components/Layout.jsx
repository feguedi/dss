import Head from 'next/head'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'

const Layout = ({ children }) => (
    <div>
        <Head>
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"/>
            <title>Sistemas de Soporte a la Decisión</title>
        </Head>
        <NavBar />
        <Container mt="1.25em">
            { children }
        </Container>
    </div>
)

export default Layout