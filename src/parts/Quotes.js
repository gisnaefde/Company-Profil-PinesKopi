import React from 'react';
import Slide from 'react-reveal/Slide';

const Qoutes = () => {
    return (
        <div className="quotes d-flex align-items-center">
            <div className="quotes-2">
                    <Slide top><h1>QUOTES</h1></Slide>
                    <Slide left>
                    <h3>
                        <span>"</span> Secangkir Kopi adalah keterkaitan rasa dan makna.<br/>
                        Sejatinya hidup tidak mengecap satu rasa, perlu proses dalam menerjemahkan semua rasa, terus mencoba untuk memaknainya.
                        Seruput Kopi mu hari ini, jelajah rasa yang ingin kau coba ! <span>"</span>
                    </h3>
                    </Slide>
                    <Slide bottom><h2>Kedai Kopi Kebon Pines</h2></Slide>
            </div>
        </div>

    );
}
export default Qoutes;