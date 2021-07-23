import React from 'react';
import quotesimg from '../assets/images/quotes.png'

const Qoutes = () => {
    return (
        <div className="quotes container">
            <div className="quotes-2 d-flex justify-conten-center">
                <div className="container">
                    <h1>'...'</h1>
                    <p>
                        " Secangkir adalah keterkaitan rasa dan makna.
                        Sejatinya hidup tidak mengecap satu rasa, perlu proses dalam menerjemahkan semua rasa, terus mencoba untuk memaknainya.
                        Seruput Kopi mu hari ini, jelajah rasa yang ingin kau coba ! "
                    </p>
                    <h2>Kedai Kopi Kebon Pines</h2>
                </div>
            </div>
            <img src={quotesimg}></img>
        </div>

    );
}
export default Qoutes;