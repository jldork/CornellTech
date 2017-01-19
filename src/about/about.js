import React, { Component } from 'react';
import TypeWriter from 'react-typewriter';

// Assets
import './about.css';
import Headshot from './Headshot.jpg';
// Text
import data_student from '../text/perpetual_student.txt';
import data_teacher from '../text/perpetual_teacher.txt';
import data_maker from '../text/perpetual_maker.txt';

const perpetual_student = atob(data_student.split(',')[1])
const perpetual_teacher = atob(data_teacher.split(',')[1])
const perpetual_maker = atob(data_maker.split(',')[1])

class About extends Component {
    render() {
        let typing_state = 1
        return (
            <div className="container">
                <div className="col headshot">
                    <h2 className="title-msg">James Leung</h2>
                    <img id="headshot" src={Headshot} role="presentation" />
                    
                    <TypeWriter typing={typing_state}>
                        <p>I solve problems with code, data, and <span style={{color:"#6fd1f1"}}>empathy</span></p>
                    </TypeWriter>
                </div>
                <div className="col">
                    <div className="about-me">
                        <h2>Perpetual Student</h2>
                        <p>{perpetual_student}</p>
                    </div>
                    <div className="about-me">
                        <h2>Perpetual Teacher</h2>
                        <p>{perpetual_teacher}</p>
                    </div>
                    <div className="about-me">
                        <h2>Perpetual Maker</h2>
                        <p>{perpetual_maker}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;
