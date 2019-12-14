import { Line } from "react-chartjs-2"
import axios from 'axios'

export default class LineChart extends React.Component {
    state = {
        chartRef: {}
    }

    async getData() {
        const dataDiesel = await (await axios.get(`http://localhost:3003/diesel`)).data
        const dataDollar = await (await axios.get(`http://localhost:3003/dollar`)).data

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
        console.log(`Datos de dólar: ${ JSON.stringify(chartRef.datasets[0].data) }`)
        console.log(`Datos de diesel: ${ JSON.stringify(chartRef.datasets[1].data) }`)
    }

    render() {
        const { chartRef } = this.state
        return (
            <Line ref="chart" data={ chartRef } />
        )
    }
}