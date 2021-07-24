import React from 'react';
import quotesimg from '../assets/images/quotes.png';

const Qoutes = () => {
    return (
        <div className="quotes">
            <div className="quotes-2 ">
                    <h1>QUOTES</h1>
                    <p>
                        <span>"</span> Secangkir adalah keterkaitan rasa dan makna.<br/>
                        Sejatinya hidup tidak mengecap satu rasa, perlu proses dalam menerjemahkan semua rasa, terus mencoba untuk memaknainya.
                        Seruput Kopi mu hari ini, jelajah rasa yang ingin kau coba ! <span>"</span>
                    </p>
                    <h2>Kedai Kopi Kebon Pines</h2>
            </div>
            <img src={quotesimg}></img>
        </div>

    );
}
export default Qoutes;