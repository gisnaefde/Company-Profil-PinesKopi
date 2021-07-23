import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Product from '../parts/Product';
import Ourstory from '../parts/Ourstory';



const LandingPage = () => {
    return (
        <div className="landingpages">
            <Header></Header>
            <Hero></Hero>
            <Product></Product>
            <Ourstory></Ourstory>

        </div>
    );
}
export default LandingPage;