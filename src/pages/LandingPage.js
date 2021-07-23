import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Product from '../parts/Product';
import Ourstory from '../parts/Ourstory';
import Quotes from '../parts/Quotes';



const LandingPage = () => {
    return (
        <div className="landingpages">
            <Header></Header>
            <Hero></Hero>
            <Product></Product>
            <Ourstory></Ourstory>
            <Quotes></Quotes>

        </div>
    );
}
export default LandingPage;