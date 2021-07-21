import React from 'react';
import Bg from '../assets/images/cf_4_2.png';


const Hero = () => {
    return (
        <section className="hero w-100">

            <div className="hero-content w-100 d-flex align-items-center">
                <div className="row ">
                    <div className="col-12 col-md-5  ">
                        <h1>Life Begins <br></br><br></br>
                            After Coffee</h1>
                    </div>
                    <div className="col-12 col-md-7">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>

                </div>

            </div>
            <img src={Bg} className="w-100"></img>
        </section>
    );
}
export default Hero;