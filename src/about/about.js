import React, { Component } from 'react';
import './about.css';
import Headshot from './Headshot.png';

class About extends Component {
    render() {
        const ME = "I believe strongly in the Open Data movement, Maker culture, and Agile philosophy. I care not just about bringing new technology to life, but also the impact it has on our culture. "
        const WHY = "Cornell Tech is a school whose philosophy resonates with me: everyone is a maker. This goes hand in hand with my passion to increase code literacy. "
        const WHAT = "I currently build data-centric applications and API's for Capital One, but I am self-taught and began to learn only a few years ago. See my journey below: "
        return (
            <div className="container">
                <img alt="James Leung" src={Headshot} className="portrait" />
                <div className="about-me">
                    <h2>About Me</h2>
                    <p>{ME + WHY + WHAT}</p>
                </div>
            </div>
        )
    }
};

export default About;
