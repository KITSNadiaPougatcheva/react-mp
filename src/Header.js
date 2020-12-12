import React from 'react';
import Logo from './Logo';
import FindMovie from './FindMovie';
import AddMovieBtn from './AddMovieBtn';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                    <Logo/>
                    <AddMovieBtn/>
                </div>
                <FindMovie/>
                <div class="header-bottom"></div>
            </header>
        );
    }
}

export default Header;
