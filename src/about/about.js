import React, { Component } from 'react';
import './about.css';
import Headshot from './Headshot.png';
import TypeWriter from 'react-typewriter';

class About extends Component {
    render() {
        const ME = "I believe strongly in the Open Data movement, Maker culture, and Agile philosophy. I care not just about bringing new technology to life, but also the impact it has on our culture. "
        const WHY = "Cornell Tech is a school whose philosophy resonates with me: everyone is a maker. This goes hand in hand with my passion to increase code literacy. "
        const WHAT = "I currently build data-centric applications and API's for Capital One, but I am self-taught and began to learn only a few years ago. "

        let typing_state = 1
        return (
            <div className="container">
                <div className="col headshot">
                    <h2 className="title-msg">Hello World!</h2>
                    <img id="headshot" src={Headshot} role="presentation" />
                    
                    <TypeWriter typing={typing_state} minDelay={300}>
                        <p>I solve problems with code, data, and empathy</p>
                    </TypeWriter>
                </div>
                <div className="col">
                    <div className="about-me">
                        <h2>Perpetual Student</h2>
                        <p>{ME + WHY + WHAT}</p>
                    </div>
                    <div className="about-me">
                        <h2>Perpetual Teacher</h2>
                        <p>{ME + WHY + WHAT}</p>
                    </div>
                    <div className="about-me">
                        <h2>Perpetual Maker</h2>
                        <p>{ME + WHY + WHAT}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;
