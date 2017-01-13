import React, { Component } from 'react';
import './header.css';
import Owls from './owls.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img alt="Owls" src={Owls} className="owls" />
            </div>
        )
    }
};

export default Header;

