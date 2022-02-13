import React from 'react';
import s from './Header.module.css';
import {ReactComponent as DarkModeIcon} from './assets/icons/dark_mode.svg'
import {ReactComponent as LightModeIcon} from './assets/icons/light_mode.svg'

const Header = ({theme, changeTheme}) => {
    console.log('theme ', theme)
    return (
        <header className={s.header}>
            <div>
                <img className={s.logo}
                      src="https://uploadstatic-sea.mihoyo.com/contentweb/20200324/2020032418381582458.png" alt=""/>
            </div>
            <div onClick={() => {
                if (theme === 'light') {
                    changeTheme('dark');
                } else if (theme === 'dark') {
                    changeTheme('light');
                }
            }}>
                {theme === 'light' && (
                    <DarkModeIcon className={s.themeIcon}/>
                )}
                {theme === 'dark' && (
                    <LightModeIcon className={s.themeIcon}/>
                )}
            </div>

        </header>
    )
}


export default Header;