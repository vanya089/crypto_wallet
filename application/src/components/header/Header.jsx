import React, {useState} from 'react';
import planet from '../../assets/astronomy_mars_planet_space_icon.svg'
import style from './Header.module.css'
import {Link} from "react-router-dom";

const isLogin = false;
const Header = () => {
    const [userWallet, setUserWallet] = useState(null)
    return (<div className={style.header}>
            <div className={style.wrapper}>
                <Link to={"/"}>
                    <div className={style.logo}>
                        <img src={planet} alt="logo"/>
                    </div>
                </Link>


                {isLogin ? <div className={style.activeButton}>address</div> :
                    <div className={style.activeButton}>CONNECT METAMASK</div>}
            </div>
        </div>

    );
};

export default Header;