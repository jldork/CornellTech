import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './cornell.css';

export default class Cornell extends Component {
    render() {
        const intangible_data = [17, 32, 68, 80, 87]
        const chartData = {
            labels: ["1975", "1985", "1995", "2005", "2015"],
            datasets: [
                {
                    data: intangible_data,
                    label: "Intangible Assets",
                    backgroundColor: "rgba(17,138,178,0.5)"
                },
                {
                    data: intangible_data.map((pct) => { return 100 - pct }),
                    label: "Tangible Assets",
                    backgroundColor: "rgba(17,138,178,0.1)"
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
                    }
                }],
                xAxes: [{
                    barPercentage: .8,
                    categoryPercentage: .5,
                    stacked: true,
                    ticks: {
                        beginAtZero: true
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
                        <p>According to the school’s mission, the education is focused on “blending technical depth, business knowhow, design skills”, and most importantly a “builder” mindset. To show they’re serious about this builder mindset, a quick look at their courses reveals a product studio, and startup studio.Cornell Tech is a one of a kind experience due to its immersive curriculum and builder philosophy. It is a perfect jump-start into the NYC tech and startup scene with connections to Gotham Ventures and Google.</p>
                    </div>
                    <div className="wrapper">
                        <h2>Why Cornell Tech?</h2>
                        <p>According to the school’s mission, the education is focused on “blending technical depth, business knowhow, design skills”, and most importantly a “builder” mindset. To show they’re serious about this builder mindset, a quick look at their courses reveals a product studio, and startup studio.Cornell Tech is a one of a kind experience due to its immersive curriculum and builder philosophy. It is a perfect jump-start into the NYC tech and startup scene with connections to Gotham Ventures and Google.</p>
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