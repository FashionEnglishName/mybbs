import React from 'react';

import HeaderStyle from "./header.module.css";

class Header extends React.Component {
    render () {
        return (
            <header className={HeaderStyle.header}>
                Header
            </header>
        )
    }
}

export default Header;