import React from 'react';
import Coffee1 from '../assets/images/coffee.jpg';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { coffee } from '../config/Coffee';
import { food } from '../config/Food';

const Product = () => {
    return (
        <section className="products">
            <div className="container products-1">
                <Slide top><h2 className="text-center">Our Producs</h2></Slide>
                <Slide bottom><h3 className="text-center">Coffee</h3></Slide>
                <Zoom>
                    <div className="row mt-5 products-2 d-flex justify-content-center">
                        {coffee.map((data, index) => {
                            return (
                                <div className="col-12 col-md-3" key={index}>
                                    <div className="d-flex justify-content-center">
                                        <img src={data.images}></img>
                                    </div>
                                    <h5 className="text-center">{data.name}</h5>
                                    <p>Rp. {data.price}</p>
                                    <p>{data.description}</p>
                                </div>
                            )
                        })

                        }
                    </div>
                </Zoom>

                <Slide bottom><h3 className="text-center">Foods</h3></Slide>
                <Zoom>
                    <div className="row mt-5 products-2 d-flex justify-content-center">
                        {food.map((data, index) => {
                            return (
                                <div className="col-12 col-md-3 mb-5" key={index}>
                                    <div className="d-flex justify-content-center">
                                        <img src={data.images}></img>
                                    </div>
                                    <h5 className="text-center">{data.name}</h5>
                                    <p>Rp {data.price}</p>
                                    <p>{data.description}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </Zoom>
            </div>
        </section>


    );
}
export default Product;