import React from 'react';

import MainContainerStyle from './mainContainer.module.css';

function mainContainer(props) {
    return (
        <div className={MainContainerStyle.mainContainer}>
            {props.children}
        </div>
    )
}

export default mainContainer;