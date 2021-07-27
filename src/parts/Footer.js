import React from 'react';
import logo from '../assets/images/logo.png';
import fb from '../assets/images/fb2.png';
import telegram from '../assets/images/telegram.png';
import ig from '../assets/images/ig.png';
import wa from '../assets/images/wa.png';
import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container footer-2 align-items-center">
                <Slide bottom>
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div className="d-flex justify-content-center">
                                <img src={logo} ></img>
                            </div>
                            <h5 className="d-flex justify-content-center">Kedai Kopi Kebon Pines</h5>
                        </div>
                        <div className="col-6 col-md-3">
                            <h3 className="d-flex justify-content-center">Location</h3>
                            <p className="d-flex justify-content-center">Ds. Sirnagalih <br />Kec.Cigalontang<br />Kab.Tasikmalaya</p>
                            <div className="d-flex justify-content-center">
                                <button className="btn d-flex justify-content-center"> Tag Maps </button>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-4">
                            <h3 className="d-flex justify-content-center">About Us</h3>
                        </div>
                        <div className="col-6 col-md-3 contact mt-4">
                            <h3 className="d-flex justify-content-center">Contact</h3>
                            <div className="d-flex justify-content-center">
                                <img src={fb}></img>
                                <img src={ig}></img>
                                <img src={wa}></img>
                                <img src={telegram}></img>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
}
export default Footer;