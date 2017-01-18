import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './header.css';

class Header extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <h1 id="name">James Leung</h1>
                <ul className="social">
                    <li><SocialIcon network="email" url="mailto:jamesleung417@gmail.com" /></li>
                    <li><SocialIcon url="http://github.com/jldork" /></li>
                    <li><SocialIcon url="http://linkedin.com/in/leungjames" /></li>
                    <li><SocialIcon url="http://twitter.com/jldork" /></li>
                </ul>
            </nav>
        )
    }
};

export default Header;

