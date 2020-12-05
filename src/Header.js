import React from 'react';
import './style.css';
import MenuItem from './MenuItem';
import Logo from './Logo';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                    <Logo/>
                    <nav className="header--navigation">
                        <ul className="navigation">
                            <MenuItem href="#all" text="all" key='1'/>
                            <MenuItem href="#documentary" text="documentary" key='2'/>
                            <MenuItem href="#comedy" text="comedy" key='3'/>
                            <MenuItem href="#horror" text="horror" key='4'/>
                            <MenuItem href="#crime" text="crime" key='5'/>
                            <MenuItem key='6'/>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
