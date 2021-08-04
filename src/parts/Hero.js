import React from 'react';
import Bg2 from '../assets/images/fp_1.jpg';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Hero = () => {
    return (
        <section className="hero w-100">
            <div className="d-flex justify-content-center">
                <div className="hero-content w-100 d-flex align-items-center container">
                    <div className="row ">
                        <div className="col-12 col-md-4 d-flex align-items-center">
                            <Fade left>
                                <h1>Life Begins <br></br>
                                    After Coffee</h1>
                            </Fade>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <Zoom>
                                <img src={Bg2} className="d-none d-md-block" alt="/"/>
                            </Zoom>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                            <Fade right>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            </Fade>
                        </div>
                        <Zoom>
                            <button className="btn"> See More </button>
                        </Zoom>
                    </div>
                </div>
            </div>
            {/* <img src={Bg1} className="w-100"></img> */}
        </section>
    );
}
export default Hero;