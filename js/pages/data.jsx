import Layout from "../components/Layout"
import LineChart from '../components/LineChart'
import { Table, Row } from 'react-bootstrap'
import axios from "axios"

const Data = ({ dieselData, dollarData }) => (
    <Layout>
        <Row>
            <div className="col-12 col-md-6">
                <h1 className="text-center">Diesel</h1>
                <Table className="table-lg-responsive table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dieselData.map(obj => (
                            <tr key={ obj["ID"] }>
                                <td>{ obj["FECHA"] }</td>
                                <td>{ obj["PRECIO"] }</td>
                            </tr>
                        )) }
                    </tbody>
                </Table>
            </div>
            <div className="col-12 col-md-6">
                <h1 className="text-center">Dólar</h1>
                <Table className="table-lg-responsive table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dollarData.map(obj => (
                            <tr key={ obj["ID"] }>
                                <td>{ obj["FECHA"] }</td>
                                <td>{ obj["MEDIA"] }</td>
                            </tr>
                        )) }
                    </tbody>
                </Table>
            </div>
        </Row>
        <LineChart />
    </Layout>
)

Data.getInitialProps = async () => {
    const dieselData = await (await axios.get('http://localhost:3003/diesel')).data
    const dollarData = await (await axios.get('http://localhost:3003/dollar')).data
    dieselData.forEach(d => {
        const nd = JSON.stringify(d["FECHA"])
        const year = nd.split("-")[0].slice(1, 5)
        const month = nd.split("-")[1]
        const day = nd.split("-")[2].slice(0, 2)
        d["FECHA"] = `${ day }/${ month }/${ year }`
    })
    dollarData.forEach(d => {
        const nd = JSON.stringify(d["FECHA"])
        const year = nd.split("-")[0].slice(1, 5)
        const month = nd.split("-")[1]
        const day = nd.split("-")[2].slice(0, 2)
        d["FECHA"] = `${ day }/${ month }/${ year }`
    })
    return {
        dieselData,
        dollarData
    }
}

export default Data