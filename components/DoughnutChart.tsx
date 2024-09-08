"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = () => {
  const data = {
    labels: ['Bank 1', 'Bank 2'],
    datasets: [{
      label: 'Banks',
      data: [1250,2500],
      backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
    }]
  }
  return (
    <Doughnut data={data} />
  )
}

export default DoughnutChart