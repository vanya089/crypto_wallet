import React from 'react';
import planet from '../../assets/astronomy_mars_planet_space_icon.svg'
import style from './Header.module.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addressSelector, setUserAddress} from "../../redux/slices/usersSlice";
import {MetaMaskInpageProvider} from "@metamask/providers";

const Header: React.FC<Window> = () => {
    const address = useSelector(addressSelector)
    const dispatch = useDispatch();
    // @ts-ignore
    const ether = window.ethereum;

    const onConnect = () => {
        if (ether) {
            ether
                .request({method: "eth_requestAccounts"})
                .then((account: any) => {
                    dispatch(setUserAddress(account))
                })
        } else {
            alert("Setup Metamask")
        }
    }


    return (<div className={style.header}>
            <div className={style.wrapper}>
                <Link to={"/"}>
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