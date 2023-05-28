import React from 'react';
import style from './Home.module.css'



const Home: React.FC = () => {

    return (
        <div className={style.wrapper}>

            <div className={style.content}>
                <div className={style.item}>
                    <h1>
                        Explore Your own planet
                        <br/>
                        In our New metaverse
                    </h1>
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