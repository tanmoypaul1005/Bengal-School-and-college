import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    const bannerData = [
        { id: 1, url: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/5/3/w900X450/Education_.jpg?w=400&dpr=2.6" },
        { id: 2, url: "https://media.vanityfair.com/photos/5f64eda08f3d1388648dde56/master/pass/covid-classrooms.jpg" },
        { id: 3, url: "https://s3-us-west-1.amazonaws.com/bananasinc/wp-media-folder-bananas-inc/wp-content/uploads/2021/05/Child-Care-Centers-2.jpg" },
        { id: 4, url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHw%3D&w=1000&q=80" }
    ];
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item style={{ height: '30rem' }}>
                    <img
                        className="d-block w-100"
                        src="https://images.newindianexpress.com/uploads/user/imagelibrary/2022/5/3/w900X450/Education_.jpg?w=400&dpr=2.6"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="bannertitle">Bengla school and college</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: '30rem' }}>
                    <img
                        className="d-block w-100"
                        src="https://media.vanityfair.com/photos/5f64eda08f3d1388648dde56/master/pass/covid-classrooms.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="bannertitle">Bengla school and college</h3>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item style={{ height: '30rem' }}>
                    <img
                        className="d-block w-100"
                        src="https://s3-us-west-1.amazonaws.com/bananasinc/wp-media-folder-bananas-inc/wp-content/uploads/2021/05/Child-Care-Centers-2.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="bannertitle">Bengla school and college</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;