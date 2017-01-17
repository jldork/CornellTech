
import React from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import "react-vis/main.css";


export default class Industry extends React.Component {
    render() {
        const data = [
            { x: '1975', y: 17 },
            { x: '1985', y: 32 },
            { x: '1995', y: 68 },
            { x: '2005', y: 80 },
            { x: '2015', y: 87 }
        ]

        return (
            <XYPlot
                width={600}
                height={300}
                fill={"#12939a"}>
                <HorizontalGridLines />
                <LineSeries
                    data={data} />
                <XAxis title="Year" tickFormat={(d,i)=>{return d}} />
                <YAxis title="% of S&P500 Market Value"/>
            </XYPlot>
        );
    }
}