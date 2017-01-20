import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './cornell.css';

// Text files
import data_digital_reality from '../text/the_digital_reality.txt';
import data_cornell_tech from '../text/why_cornell_tech.txt';
const the_digital_reality = atob(data_digital_reality.split(',')[1])
const why_cornell_tech = atob(data_cornell_tech.split(',')[1])


export default class Cornell extends Component {
    render() {
        const intangible_data = [17, 32, 68, 80, 87]
        const chartData = {
            labels: ["1975", "1985", "1995", "2005", "2015"],
            datasets: [
                {
                    data: intangible_data,
                    label: "Intangible Assets",
                    backgroundColor: "rgba(229,16,34,0.5)"
                },
                {
                    data: intangible_data.map((pct) => { return 100 - pct }),
                    label: "Tangible Assets",
                    backgroundColor: "rgba(229,16,34,0.1)"
                }
            ]
        };

        const chartOptions = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '% of S&P500 Market Value'
                    }
                }],
                xAxes: [{
                    barPercentage: .8,
                    categoryPercentage: .5,
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Year'
                    }
                }]
            },
            tooltips: {
                caretSize: 0,
                cornerRadius: 0,
                callbacks: {
                    title: () => { },
                    label: (item, data) => {
                        const dataset = data.datasets[item.datasetIndex];
                        const value = dataset.data[item.index];
                        return value.toString() + '%';
                    },
                },
            },
        }

        return (
            <div className="cornell">
                <div className="text">
                    <div className="wrapper">
                        <h2>The Digital Reality</h2>
                        <p>{the_digital_reality}</p>
                    </div>
                    <div className="wrapper">
                        <h2>Why Cornell Tech</h2>
                        <p>{why_cornell_tech}</p>
                    </div>
                </div>
                <div className="plot">
                    <h3>{"S&P 500 value is largely intangible assets"}</h3>
                    <Bar data={chartData} options={chartOptions} width={400} height={200} />
                    <p className="footnote">Source: Ocean Tomo, LLC. </p>
                </div>
            </div>
        );
    }
}