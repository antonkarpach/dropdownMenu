import React from 'react';
import './Menu.scss';

const Menu:React.FC = () => {
    return(
        <div className="menu">
            <div className="menu__item">Home</div>
            <div className="menu__item">News</div>
            <div className="menu__item">About</div>
            <div className="menu__item">Login</div>
        </div>
    );
};

export default  Menu;

