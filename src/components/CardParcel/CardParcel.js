import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import './CardParcel.css';

function CardParcel() {
    return (
        <div className="cardParcel">
            <div className="carouselParcel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="parcel"
                            src="https://assets.klikindomaret.com/share/20067201_1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel"
                            src="https://assets.klikindomaret.com/share/10000700/10000700_1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel"
                            src="https://assets.klikindomaret.com/products/20097484/20097484_1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel"
                            src="https://assets.klikindomaret.com/products/20106379/20106379_1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel"
                            src="https://assets.klikindomaret.com/products/20024644/20024644_1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel"
                            src="https://assets.klikindomaret.com/products/20114429/20114429_1.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default CardParcel
