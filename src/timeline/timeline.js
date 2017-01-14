import React, { Component } from 'react';
import './timeline.css';

class Timeline extends Component {
    render() {
        return (
            <div className="timeline">
                <h2>My Journey</h2>
                <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1witHYshts05I9sM-X7OB5DBkzgpQtN7e1EtaprNjiDI&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
            </div>)
    }
}

export default Timeline;