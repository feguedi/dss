import { Line } from "react-chartjs-2"
import axios from 'axios'

class LineChart_ extends React.Component {
    state = {
        chartRef: {}
    }

    async getData() {
        console.log(`Solicitando datos a ${ process.env.WEBSERVICE_HOST }/diesel`)
        const dataDiesel = await (await axios.get(`${ process.env.WEBSERVICE_HOST }/diesel`)).data
        const dataDollar = await (await axios.get(`${ process.env.WEBSERVICE_HOST }/dollar`)).data

        dataDiesel.forEach(d => {
            let nd = new Date(d["FECHA"])
            d["FECHA"] = `${ nd.getDate() }/${ nd.getMonth() + 1 }/${ nd.getFullYear() }`
        })
        dataDollar.forEach(d => {
            let nd = new Date(d["FECHA"])
            d["FECHA"] = `${ nd.getDate() }/${ nd.getMonth() + 1 }/${ nd.getFullYear() }`
        })

        const dollarDataset = {
            label: "Dólar",
            data: dataDollar.map(d => d["MEDIA"]),
            fill: 'none',
            borderColor: '#4caf50',
            borderWidth: 1,
            borderCapStyle: "butt",
            lineTension: 1
        }
        const dieselDataset = {
            label: "Diesel",
            data: dataDiesel.map(d => d["PRECIO"]),
            fill: 'none',
            borderColor: '#424242',
            borderWidth: 1,
            borderCapStyle: "butt",
            lineTension: 1
        }

        this.setState({
            chartRef: {
                labels: [dataDiesel[0]["FECHA"], dataDiesel[31]["FECHA"], dataDiesel[59]["FECHA"], dataDiesel[90]["FECHA"], dataDiesel[120]["FECHA"]],
                datasets: [dollarDataset, dieselDataset]
            }
        })
    }

    async componentDidMount() {
        await this.getData()
        const { chartRef } = this.state
        // console.log(`Datos de dólar: ${ JSON.stringify(chartRef.datasets[0].data) }`)
        // console.log(`Datos de diesel: ${ JSON.stringify(chartRef.datasets[1].data) }`)
    }

    render() {
        const { chartRef } = this.state
        return (
            <Line ref="chart" data={ chartRef } />
        )
    }
}

const LineChart = ({ chartRef }) => <><Line options={{ responsive: true }} data={ chartRef } /></>

LineChart.getInitialProps = ctx => {
    console.log(`ctx.query: ${ JSON.stringify(ctx.query) }`)
    const { dieselData, dollarData } = ctx.query

    console.log(`Propiedades de LineChart`)

    try {    
        const dollarDataset = {
            label: "Dólar",
            data: dollarData.map(d => d["MEDIA"]),
            fill: 'none',
            borderColor: '#4caf50',
            borderWidth: 1,
            borderCapStyle: "butt",
            lineTension: 1
        }
        const dieselDataset = {
            label: "Diesel",
            data: dieselData.map(d => d["PRECIO"]),
            fill: 'none',
            borderColor: '#424242',
            borderWidth: 1,
            borderCapStyle: "butt",
            lineTension: 1
        }

        const chartRef = {
            labels: [dieselData[0]["FECHA"], dieselData[31]["FECHA"], dieselData[59]["FECHA"], dieselData[90]["FECHA"], dieselData[120]["FECHA"]],
            datasets: [dollarDataset, dieselDataset]
        }

        return { chartRef }
    } catch (error) {
        console.log(`Error al obtener datos: ${ error }`)
        return {}
    }
}

export default LineChart