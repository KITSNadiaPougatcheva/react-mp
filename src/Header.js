import React from 'react';
import './style.css';
import MenuItem from './MenuItem';

class Header extends React.Component {
    render() {
        return (
            <header>
            <div class="header">
                <h1 class="header--logo"><a href="#"><b>netflix</b>roulette</a></h1>
                <nav class="header--navigation">
                    <ul class="navigation">
                        <MenuItem href="#all" text="all" key='1'/>
                        <MenuItem href="#documentary" text="documentary" key='2'/>
                        <MenuItem href="#comedy" text="comedy" key='3'/>
                        <MenuItem href="#horror" text="horror" key='4'/>
                        <MenuItem href="#crime" text="crime" key='5'/>
                    </ul>
                </nav>
            </div>
            </header>
        );
    }
}

export default Header;
