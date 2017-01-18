import React, { Component } from 'react';

import './cornell.css';
import logo from './logo.png';

export default class Cornell extends Component {
    render() {
        return (
            <div className="cornell">
                <div className="wrapper">
                    <h2>So Why Cornell Tech?</h2>
                    <p>According to the school’s mission, the education is focused on “blending technical depth, business knowhow, design skills”, and most importantly a “builder” mindset. To show they’re serious about this builder mindset, a quick look at their courses reveals a product studio, and startup studio.Cornell Tech is a one of a kind experience due to its immersive curriculum and builder philosophy. It is a perfect jump-start into the NYC tech and startup scene with connections to Gotham Ventures and Google.</p>
                </div>
                <img src={logo} />
            </div>
        );
    }
}