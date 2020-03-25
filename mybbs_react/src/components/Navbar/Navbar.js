import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';

import NavbarStyle from './navbar.module.css';

class Navbar extends React.Component {
    render () {
        const navbarItems = [
            {
                name: "github",
                image: "123.jpg"
            }, 
            {
                name: "LinkedIn",
                image: "456.jpg"
            },
            {
                name: "email",
                image: "777.jpg"
            },
            {
                name: "resume",
                image: "888.jpg"
            }
        ];

        return (
            <nav className={NavbarStyle.navbar}>
                <div className={NavbarStyle.logo}></div>
                <div className={NavbarStyle.itemGroup}>
                    {navbarItems.map(item => <NavbarItem link={item.image} name={item.name}></NavbarItem>)}
                </div>
            </nav>
        )
    }
}

export default Navbar;