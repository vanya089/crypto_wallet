import React from 'react';
import planet from '../../assets/astronomy_mars_planet_space_icon.svg'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}>
                    <img src={planet} alt="logo"/>
                </div>
                <div className={style.button}>
                    CONNECT METAMASK
                </div>
            </div>
        </div>

    );
};

export default Header;