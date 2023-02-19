import React, {useEffect, useState} from 'react';
import style from './Profile.module.css'
import axios from "axios";

const Profile = () => {
    const [items, setItems] = useState([]);
    const [isLogin, setIsLogin] = useState(true)

    const fetchUsers = async () => {
        try {
            const res = await axios.get(
                `https://new-backend.unistory.app/api/data`
            );
            setItems(res.data.items)
        } catch (e) {
            console.log(e, "AXIOS ERROR")
        }
    };

    useEffect(() => {
        fetchUsers()
    },)
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

                <div className={style.profileForm}>
                    <h5>Name</h5>
                    <div className={style.name}>Rojer waters</div>
                    <h5>Email</h5>
                    <div className={style.name}>Charadeyouare@gmail.com</div>
                </div>

                <div className={style.buttonSingUp}>List me to table</div>
            </div>
            <div className={style.usersTable}>
                <h3>Participation listing (enable only for participants)</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Wallet</th>
                    </tr>
                    </thead>
                </table>
                <div className={style.usersTableBody}>
                    <table>
                        <tbody>
                        {
                           isLogin && <tr>
                                <td style={{color: "#E75626"}}>Rojer waters</td>
                                <td style={{color: "#E75626"}}>Charadeyouare@gmail.com</td>
                                <td style={{color: "#E75626"}}>0x279D9f0c10fBB3D44fEf96...</td>
                            </tr>
                        }
                        {
                            items.map((obj, index) => (
                                <tr key={index}>
                                    <td>{obj.username}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.address}</td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Profile;