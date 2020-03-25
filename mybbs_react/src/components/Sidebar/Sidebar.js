import React from 'react';

import SidebarStyle from './sidebar.module.css';

class Sidebar extends React.Component {
    render () {
        return (
            <aside className={SidebarStyle.sidebar}>
                sidebar
            </aside>
        );
    }
}

export default Sidebar;