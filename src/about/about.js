import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        const INTRO = "Hello! My name is James and I build data tools and products at Capital One.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
        return (
            <div className="about-me">
                <h2>About Me</h2>
                <p>{INTRO}</p>
            </div>
        )
    }
};

export default About;