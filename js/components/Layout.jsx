import Head from 'next/head'
import NavBar from './NavBar'

const Layout = ({ children }) => (
    <div>
        <Head>
            <title>Sistemas de Soporte a la Decisión</title>
        </Head>
        <NavBar />
        { children }
    </div>
)

export default Layout