import { Line } from "react-chartjs-2"
import { Row } from 'react-bootstrap'
import axios from 'axios'
import Layout from '../components/Layout'

const Ejemplo = ({ chartRef }) => {
    return (
        <Layout>
            <Row style={{ position: "relative", margin: "auto", width: 600, height: 500 }}>
                <h2>Chart.js</h2>
                <Line options={{ responsive: true }} data={ chartRef } />
            </Row>
        </Layout>
    )
}

Ejemplo.getInitialProps = async () => {
    const dieselData = await (await axios.get(`${ process.env.WEBSERVICE_HOST }/diesel`)).data
    const dollarData = await (await axios.get(`${ process.env.WEBSERVICE_HOST }/dollar`)).data
    const dollarDataset = {
        label: "Dólar",
        data: dollarData.map(d => d["MEDIA"]),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#4caf50',
        borderWidth: 1,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        lineTension: 0.1
    }
    const dieselDataset = {
        label: "Diesel",
        data: dieselData.map(d => d["PRECIO"]),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: '#424242',
        borderWidth: 1,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        lineTension: 0.1
    }

    const chartRef = {
        labels: dieselData.map(elm => elm["FECHA"].split("T")[0]),
        datasets: [dollarDataset, dieselDataset]
    }

    return { chartRef }
}

export default Ejemplo