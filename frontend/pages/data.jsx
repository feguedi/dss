import Layout from "../components/Layout"
import LineChart from '../components/LineChart'
import Error from 'next/error'
import { Table, Row } from 'react-bootstrap'
import axios from "axios"

const Data = ({ dieselData, dollarData, errorCode }) => {
    if (errorCode) 
        return (
            <Layout>
                <Error statusCode={ errorCode } />
            </Layout> 
        )

    return (
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
            <hr />
            <h4>Hora actual: </h4><p>{ `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` }</p>
            <LineChart dieselData={ dieselData } dollarData={ dollarData } />
        </Layout>
    )
}

Data.getInitialProps = async () => {
    console.log(`fetching data`)
    const resDiesel = await axios.get(`${ process.env.WEBSERVICE_HOST }/diesel`)
    const resDollar = await axios.get(`${ process.env.WEBSERVICE_HOST }/dollar`)

    const errorCodeDiesel = resDiesel.status > 200 ? resDiesel.status : ""
    const errorCodeDollar = resDollar.status > 200 ? resDollar.status : ""
    const errorCode = errorCodeDiesel ? errorCodeDiesel : (errorCodeDollar ? errorCodeDollar : "")
    console.log(`errorCode: ${ errorCode }`)

    const dieselData = resDiesel.data
    const dollarData = resDollar.data
    
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
        errorCode,
        dieselData,
        dollarData
    }
}

export default Data