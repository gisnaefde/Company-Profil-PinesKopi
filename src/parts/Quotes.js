import React from 'react';
import quotesimg from '../assets/images/quotes.png';
import Slide from 'react-reveal/Slide';

const Qoutes = () => {
    return (
        <div className="quotes">
            <div className="quotes-2 ">
                    <Slide top><h1>QUOTES</h1></Slide>
                    <Slide left>
                    <p>
                        <span>"</span> Secangkir adalah keterkaitan rasa dan makna.<br/>
                        Sejatinya hidup tidak mengecap satu rasa, perlu proses dalam menerjemahkan semua rasa, terus mencoba untuk memaknainya.
                        Seruput Kopi mu hari ini, jelajah rasa yang ingin kau coba ! <span>"</span>
                    </p>
                    </Slide>
                    <Slide bottom><h2>Kedai Kopi Kebon Pines</h2></Slide>
            </div>
            <img src={quotesimg}></img>
        </div>

    );
}
export default Qoutes;