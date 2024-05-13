// src/CarouselSlider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselSlider = () => {
    return (
        <Carousel interval={3000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image1.jpg"  // Change the path as necessary
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image2.jpg"  // Change the path as necessary
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image3.jpg"  // Change the path as necessary
                    alt="Third slide"
                />
            </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image4.jpg"  // Change the path as necessary
                    alt="Third slide"
                />
            </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image5.jpg"  // Change the path as necessary
                    alt="Third slide"
                />
            </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image6.jpg"  // Change the path as necessary
                    alt="Third slide"
                />
            </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image7.jpg"  // Change the path as necessary
                    alt="Third slide"
                />
            </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/hostel/image8.jpg"  // Change the path as necessary
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselSlider;
