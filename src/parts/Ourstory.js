import React from 'react';
import Ourstoryimg from '../assets/images/cf_2.jpg';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Ourstory = () => {
    return (
        <div className="ourstory">
            <div className="container ">
                <Slide top><h2 className="text-center mb-4 mt-3">Our Story</h2></Slide>
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6 ">
                        <Zoom><img src={Ourstoryimg} alt="/"></img></Zoom>
                    </div>
                    <div className="col-12 col-md-6 story mb-3">
                        <Slide bottom>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </Slide>
                    </div>

                </div>

            </div>

        </div>

    );
}
export default Ourstory;