import React from 'react';
import Logo from './Logo';
import FindMovie from './FindMovie';
import AddMovie from './AddMovie'
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                    <Logo/>
                    <AddMovie/>
                </div>
                <FindMovie findMovie={this.props.findMovie}/>
                <div className="header-bottom"></div>
            </header>
        );
    }
}

export default Header;
