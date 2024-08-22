import {
    Chart,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PieController,
    BarController,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

// Register the required components
Chart.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PieController,
    BarController,
    Tooltip,
    Legend
);

export const generatePieChart = (data) => {
    return (
        <Pie
            data={{
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                }],
            }}
        />
    );
};

export const generateBarChart = (data) => {
    return (
        <Bar
            data={{
                labels: Object.keys(data),
                datasets: [{
                    label: 'Data',
                    data: Object.values(data),
                    backgroundColor: '#36A2EB',
                }],
            }}
        />
    );
};
