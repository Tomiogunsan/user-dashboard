import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function BarChart() {
    const[chartData, setChartData] = useState(
        {
            datasets: [],
        }
    )

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels;
        })
    })
  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh]
        h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    </>
  )
}
