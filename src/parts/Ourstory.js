import React from 'react';
import Ourstoryimg from '../assets/images/cf_2.jpg';

const Ourstory = () => {
    return (
        <div className="ourstory">
            <div className="container ">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6 d-block d-md-block">
                        <img src={Ourstoryimg}></img>
                    </div>
                    <div className="col-12 col-md-6 story ">
                        <h2 className="d-flex justify-content-center mb-4 mt-3">Our Story</h2>
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
                    </div>

                </div>

            </div>

        </div>

    );
}
export default Ourstory;