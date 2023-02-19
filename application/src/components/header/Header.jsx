import React from 'react';
import planet from '../../assets/astronomy_mars_planet_space_icon.svg'
import style from './Header.module.css'

const isLogin = false;
const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>

                <div className={style.logo}>
                    <img src={planet} alt="logo"/>
                </div>

                {isLogin ? <div className={style.activeButton}>adress</div>
                         : <div className={style.activeButton}>CONNECT METAMASK</div>}
            </div>
        </div>

    );
};

export default Header;