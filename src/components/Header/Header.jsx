import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://uploadstatic-sea.mihoyo.com/contentweb/20200324/2020032418381582458.png" alt=""/>
        </header>
    )
}

export default Header;