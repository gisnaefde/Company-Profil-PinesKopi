import React from 'react';
import Bg1 from '../assets/images/cf_4_2.png';
import Bg2 from '../assets/images/fp_1.jpg';


const Hero = () => {
    return (
        <section className="hero w-100">
            <div className="d-flex justify-content-center">
                <div className="hero-content w-100 d-flex align-items-center container">
                    <div className="row d-flex  ">
                        <div className="col-12 col-md-5 d-flex align-items-center">
                            <h1>Life Begins <br></br>
                                After Coffee</h1>
                        </div>
                        <div className="col-12 col-md-7 d-flex align-items-center justify-content-center">
                            <img src={Bg2} className="d-none d-md-block"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                        </div>
                        <button className="btn "> See More </button>
                    </div>
                </div>
            </div>
            <img src={Bg1} className="w-100"></img>
        </section>
    );
}
export default Hero;