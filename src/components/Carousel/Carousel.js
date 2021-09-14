import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';
import Banner1 from '../.././assets/1-a.jpg';
import Banner2 from '../.././assets/1-b.jpg';
import Banner3 from '../.././assets/1-c.jpg';
import Banner4 from '../.././assets/1-d.jpg';
import Banner5 from '../.././assets/1-e.jpg';

class CarouselSlide extends React.Component {
    render() {
        return (
            <div className="carousel" >
                <Carousel>
                    <Carousel.Item style={{ height: "50%" }}>
                        <img
                            className="slide"
                            src={Banner5}
                            style={{ width: "100%", height: "80%" }}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "50%" }}>
                        <img
                            className="slide"
                            src={Banner3}
                            style={{ width: "100%", height: "80%" }}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "50%" }}>
                        <img
                            className="slide"
                            src={Banner4}
                            style={{ width: "100%", height: "80%" }}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "50%" }}>
                        <img
                            className="slide"
                            src={Banner1}
                            style={{ width: "100%", height: "80%" }}
                            alt=""
                        />
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "50%" }}>
                        <img
                            className="slide"
                            src={Banner2}
                            style={{ width: "100%", height: "80%" }}
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default CarouselSlide;
