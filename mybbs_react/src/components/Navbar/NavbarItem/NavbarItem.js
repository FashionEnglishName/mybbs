import React from 'react';

import NavbarItemStyle from './navbarItem.module.css';

class NavbarItem extends React.Component {
    render () {
        return (
            <div className={NavbarItemStyle.navbarItem}>
                {this.props.name}
            </div>
        )
    }
}

export default NavbarItem;