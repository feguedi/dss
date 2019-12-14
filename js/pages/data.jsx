import Layout from "../components/Layout"
import axios from "axios"

const Data = () => (
    <Layout mt="1em">
        <h1>Diesel</h1>

    </Layout>
)

const getData = async () => axios.get('http://localhost:3003/diesel')

export default Data