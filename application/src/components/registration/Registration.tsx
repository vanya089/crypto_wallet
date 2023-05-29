import React, { useState } from 'react';
import style from './Registration.module.css'
import { useDispatch, useSelector } from "react-redux";
import ModalMeta from "../modal-meta/ModalMeta";
import { emailSelector, nameSelector, setUserEmail, setUserName } from "../../redux/slices/usersSlice";
import { Link } from "react-router-dom";

const Registration = () => {
    const name = useSelector(nameSelector);
    const email = useSelector(emailSelector);
    const [modalActive, setModalActive] = useState(true);
    const dispatch = useDispatch();

    const addName = (value: string) => {
        dispatch(setUserName(value))
    }

    const addEmail = (value: string) => {
        dispatch(setUserEmail(value))
    }

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <h4>
                    Beta test registration
                </h4>

                <div className={style.info}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Delectus in maiores nostrum quisquam vitae?
                    Accusantium aspernatur dolor earum fugiat id illum nostrum possimus temporibus.
                    Accusamus dolorum harum praesentium voluptatem voluptatum.
                </div>

                <form className={style.registrationForm}>
                    <h5>Name</h5>
                    <input value={name} onChange={event => addName(event.target.value)} type="text"
                        placeholder="We will display your name in participation list" />
                    <h5>Email</h5>
                    <input value={email} onChange={event => addEmail(event.target.value)} type="email"
                        placeholder="We will display your name in participation list" />
                </form>

                <Link style={{ textDecoration: "none" }} to={"/profile"}>
                    <div className={style.buttonSingUp}>Get early access</div>
                </Link>

            </div>
            {modalActive && <ModalMeta setActive={setModalActive} />}
        </div>
    );
};

export default Registration;