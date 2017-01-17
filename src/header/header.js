import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <h1 id="name">James Leung</h1>
                <ul className="desc">
                    <li className="desc-item">Student</li>
                    <li className="desc-item">Teacher</li>
                    <li className="desc-item">Maker</li>
                </ul>
            </nav>
        )
    }
};

export default Header;

