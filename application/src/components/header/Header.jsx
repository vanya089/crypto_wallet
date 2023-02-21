import React from 'react';
import planet from '../../assets/astronomy_mars_planet_space_icon.svg'
import style from './Header.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setUserAddress} from "../../redux/slices/usersSlice";


const Header = () => {
    const address = useSelector(state => state.users.address)
    const dispatch = useDispatch();


    const onConnect = () => {
        if (window.ethereum) {
            window.ethereum
                .request({method: "eth_requestAccounts"})
                .then((account) => {
                    dispatch(setUserAddress(account[0]))
                })
        } else {
            alert("Setup Metamask")
        }
    }


    return (<div className={style.header}>
            <div className={style.wrapper}>
                <Link  to={"/"}>
                    <div className={style.logo}>
                        <img src={planet} alt="logo"/>
                    </div>
                </Link>


                {address ? <div className={style.activeButton}>{address}</div> :
                    <div onClick={onConnect} className={style.activeButton}>CONNECT METAMASK</div>}
            </div>
        </div>

    );
};

export default Header;