import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Cria o novo gráfico
    chartRef.current = new Chart(document.getElementById('lineChart1'), {
      type: 'line',
      data: data,
      options: options,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); 

  return (
    <div>
      <canvas id="lineChart1"></canvas>
    </div>
  );
};

const data = {
  labels: ['Jun', 'Jul', 'Aug', 'Sopi', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Energy Produced',
      data: [0, 50, 150, 100, 200, 250, 300],
      borderColor: '#00DC5D',
      backgroundColor: 'rgba(0, 220, 93, 0.2)',
      tension: getRandomArbitrary(0.5, 0.9), 
    },
    {
      label: 'Energy Consumption',
      data: [0, 100, 50, 150, 200, 300, 250],
      borderColor: '#4372FF',
      backgroundColor: 'rgba(67, 114, 255, 0.2)',
      tension: getRandomArbitrary(0.5, 0.9), 
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      max: 300,
      stepSize: 50,
    },
  },
  elements: {
    point: {
      radius: 0, 
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 20,
        usePointStyle: true,
        color: 'white', 
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default LineChart;