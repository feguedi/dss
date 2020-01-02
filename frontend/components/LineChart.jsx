import { Line } from "react-chartjs-2"

export default ({ dollarData, dieselData }) => {
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

    const dates = dieselData.map(elm => elm["FECHA"])

    const chartRef = {
        labels: dates,
        datasets: [dollarDataset, dieselDataset]
    }

    return <Line options={{ responsive: true }} data={ chartRef } />
}
