import React from 'react';
import MenuItem from './MenuItem';

import menu from './menu';

class Navigation extends React.Component {
    state = { menu }

    render() {
        const { menu } = this.state;

        return (
            <section className="navigation">
                <div className="navigation">
                    <nav className="header--navigation">
                        <ul className="navigation">
                            {menu.map(item => <MenuItem id={item.id} className={item.id} href={item.href} text={item.title} key={item.id} title={item.tooltip ?? item.title}/>)}
                        </ul>
                    </nav>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Navigation;
