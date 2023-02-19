import React from 'react';
import style from './Registration.module.css'

const Registration = () => {
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

                <div className={style.registrationForm}>
                    <h5>Name</h5>
                    <input type="text" placeholder="We will display your name in participation list"/>
                    <h5>Email</h5>
                    <input type="email" placeholder="We will display your name in participation list"/>
                </div>

                <div className={style.buttonSingUp}>Get early access</div>

            </div>

        </div>
    );
};

export default Registration;