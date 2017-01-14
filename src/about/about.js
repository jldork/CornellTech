import React, { Component } from 'react';
import './about.css';
import Headshot from './Headshot.png';

class About extends Component {
    render() {
        const WHY = "I believe strongly in the Open Data movement, Maker culture, and Agile philosophy. I care not just about bringing new technology to life, but also the impact it has on our culture. Cornell Tech is a school whose philosophy resonates with me: everyone is a maker. This goes hand in hand with my passion to increase code literacy."

        return (
            <div className="container">
                <img alt="James Leung" src={Headshot} className="portrait" />
                <div className="about-me">
                    <h2>Why Cornell Tech</h2>
                    <p>{WHY}</p>
                </div>
            </div>
        )
    }
};

export default About;
