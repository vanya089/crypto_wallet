import React, {useState} from 'react';
import style from './Home.module.css'
import planet from '../../assets/palnet.png'


const Home = () => {
    // animation code
    const [percent, setPercent] = useState(1)


    const radius = 242;
    const circumference = 2 * Math.PI * radius;

    const offset = circumference - percent / 100 * circumference;


    return (
        <div className={style.wrapper}>

            <div className={style.content}>
                <div className={style.item}>
                    <div className={style.anime}>
                        <img onClick={() => setPercent(percent + 5)} className={style.planet} src={planet} alt="mars"/>
                        <svg className={style.progressRing} width="500" height="500">
                            <circle
                                className={style.progressRingCircle}
                                stroke="#E75626"
                                strokeWidth="2"
                                cx="250"
                                cy="250"
                                r="242"
                                style={{
                                    strokeDashoffset: offset,
                                    strokeDasharray: circumference,
                                }}
                            />
                        </svg>
                    </div>

                    <h1>
                        Explore Your own planet
                        <br/>
                        In our New metaverse
                    </h1>
                    });
                </div>
                <div className={style.roadMap}>
                    <h3>Roadmap stats</h3>
                    <div className={style.list}>
                        <div className={style.listNumber}>12, 345</div>
                        <div className={style.listText}>Lorem ipsum dolor</div>
                        <div className={style.listNumber}>12, 345</div>
                        <div className={style.listText}>Lorem ipsum dolor</div>
                        <div className={style.listNumber}>12, 345</div>
                        <div className={style.listText}>Lorem ipsum dolor</div>
                    </div>
                </div>
                <div className={style.info}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Aspernatur itaque magnam temporibus totam vitae.
                    Cumque, repellendus, sequi! Aspernatur at blanditiis, eos, incidunt magni,
                    nemo non pariatur quod sapiente voluptates voluptatum.
                </div>
            </div>


        </div>
    );
};

export default Home;