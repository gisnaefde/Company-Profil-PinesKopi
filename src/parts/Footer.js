import React from 'react';
import logo from '../assets/images/logo.png';
import fb from '../assets/images/fb2.png';
import telegram from '../assets/images/telegram.png';
import ig from '../assets/images/ig.png';
import wa from '../assets/images/wa.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-6 col-md-3 ">
                        <img src={logo} className=""></img>
                        <h5>Kedai Kopi Kebon Pines</h5>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3>Location</h3>
                        <p>Ds. Sirnagalih <br/>Kec.Cigalontang<br/>Kab.Tasikmalaya</p>
                        <button className="btn"> Tag Maps </button>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3>About Us</h3>
                    </div>
                    <div className="col-6 col-md-3 contact">
                        <h3>Contact</h3>
                        <img src={fb}></img>
                        <img src={ig}></img>
                        <img src={wa}></img>
                        <img src={telegram}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;