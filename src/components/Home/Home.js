import React from 'react';
import Banner from './Banner/Banner';
import BlogCard from './Blog/BlogCard';
import Cart from './Cart/Cart';
import PromoContent from './PromoContent/PromoContent.js';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PromoContent />
            <Cart></Cart>
            <BlogCard />
        </div>
    );
};

export default Home;