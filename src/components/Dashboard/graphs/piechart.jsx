import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import "./chart.css"

ChartJS.register(Tooltip, Legend, ArcElement)
const Piechart = () => {
    const pieChart = {
        labels: ["CAR", "BIKE & SCOOTER", "TRUCK", "AUTO", "TRACTOR"],
        datasets: [{
            label: "",
            data: [40, 120, 40, 80, 25],
            backgroundColor: [
                "#f982c6", "#f47c75", "#9cbfde", "#eed67b", "#7bd1d9"
            ],
            hoverOffset: 4,
        }

        ]



    }
    return (
        <div className='mainpiechart'>
            <Pie data={pieChart} className='piechart' />
        </div>
    )
}

export default Piechart
