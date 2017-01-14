import React, { Component } from 'react';
import './header.css';
import Owls from './owls.jpg'

class Header extends Component {
    render() {
        return (
            <img alt="Owls" src={Owls} className="header" />
        )
    }
};

export default Header;

