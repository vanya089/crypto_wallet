import React, {useState} from 'react';
import style from './ModalMeta.module.css'

const ModalMeta = ({active, setActive}) => {
    return (
        <div className={style.modal}>
            <div className={style.content}>
                <h1 className={style.header}>metamask extention</h1>
                <div className={style.info}>
                    To work with our application,
                    you have to install the
                    <a
                        style={{color: "#E75626", textDecoration: "none"}}
                        href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    >
                        <br/>Metamask browser extension
                    </a>
                </div>
                <div onClick={() => setActive(false)} className={style.activeButton}>Skip this step</div>
            </div>
        </div>
    );
};

export default ModalMeta;