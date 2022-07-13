import React from 'react';
import './BlogCard.css';

const BlogCard = () => {
    return (
        <div>
            <div class="container">

                <div class="product-card">
                    <div class="product-img img-one"></div>
                    <div class="product-text">
                        <h3>London</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                    </div>
                    <div class="product-cart">
                        <button type="submit">Read More</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-img img-two"></div>
                    <div class="product-text">
                        <h3>Amsterdam</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, deserunt maxime? Earum eveniet suscipit ad! Quidem recusandae minima est minus nobis accusamus.</p>
                    </div>
                    <div class="product-cart">
                        <button type="submit">Read More</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-img img-three"></div>
                    <div class="product-text">
                        <h3>Madrid</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum. Non maxime corrupti illo necessitatibus error vitae numquam perspiciatis culpa.</p>
                    </div>
                    <div class="product-cart">
                        <button type="submit">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;