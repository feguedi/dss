import Layout from "../components/Layout"
import { Table } from 'react-bootstrap'
import axios from "axios"

const Data = () => (
    <Layout>
        <h1>Diesel</h1>
        <Table className="table-lg-responsive table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>Fecha</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                { dieselComponent }
            </tbody>
        </Table>
    </Layout>
)

let dieselComponent

axios.get('localhost:3003/diesel')
    .then(({ data }) => {
        console.log(`Datos: ${ data }`)
        dieselComponent = data.map(obj => (
            <tr>
                <td>{ obj["FECHA"] }</td>
                <td>{ obj["PRECIO"] }</td>
            </tr>
        ))
    })
    .catch(err => {
        console.error(`${ JSON.stringify(err) }`)
        dieselComponent = (
            <tr>
                <td>-</td>
                <td>-</td>
            </tr>
        )
    })

export default Data