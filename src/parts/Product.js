import React from 'react';
import Coffee1 from '../assets/images/coffee.jpg';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Product = () => {
    return (
        <section className="coffee">
            <div className="container coffee-1">
                <Slide top><h2 className="text-center">Our Producs</h2></Slide>
                <Slide bottom><h3 className="text-center">Coffee</h3></Slide>
                <Zoom>
                    <div className="row mt-5 coffee-2 d-flex justify-content-center">
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                    </div>
                </Zoom>

                <Slide bottom><h3 className="text-center">Foods</h3></Slide>
                <Zoom>
                    <div className="row mt-5 coffee-2 d-flex justify-content-center">
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                        <div className="col-12 col-md-3 ">
                            <img src={Coffee1}></img>
                            <h5 className="text-center">Cappucino</h5>
                            <p>Rp. 20.000</p>
                            <p>Cappucinomerupakan kopi yang berasal dari Italia</p>
                        </div>
                    </div>
                </Zoom>
            </div>
        </section>


    );
}
export default Product;