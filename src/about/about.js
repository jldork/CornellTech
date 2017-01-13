import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        const INTRO = "I build resilient data-centric web applications and API's at Capital One. I first started writing code around three years ago, when I first heard about machine learning. As soon as I got home from work, I watched Coursera videos and went through Data Science tutorials. Coding transitioned from side-hobby to work when I was able to reduce a 3 week process into a single day using Python. At that point, I realized that learning to code empowers you to bring any idea into reality. Since then, I have been working to share that same empowerment with others. Please click the timeline below to follow my journey";

        return (
            <div className="about-me">
                <h2>About Me</h2>
                <p>{INTRO}</p>
            </div>
        )
    }
};

export default About;
