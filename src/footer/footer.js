import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span>Come Find Me: </span>
                <ul className="social">
                    <li><SocialIcon network="email" url="mailto:jamesleung417@gmail.com" /></li>
                    <li><SocialIcon url="http://github.com/jldork" /></li>
                    <li><SocialIcon url="http://linkedin.com/in/leungjames" /></li>
                    <li><SocialIcon url="http://twitter.com/jldork" /></li>
                </ul>
            </div>
        )
    }
};

export default Footer;

