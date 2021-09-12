import React from 'react';
import './Row1.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

function Row1() {
    return (
        <div className="row-cards1">
            <div class="card">
                <img
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/MTA-1162932/parcelindonesia_parcelindonesia-s6-makanan-parcel-lebaran_full02.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <h1>Paket A</h1>
                    <h4>2 Syrups / Packaging Juice / Soft Drinks</h4>
                    <h4>3 Chocolates</h4>
                    <h4>3 Snacks / Biscuits</h4>
                    <h4>Kartu Ucapan Dengan Custom Message</h4>
                    <div className="body-button">
                        <a href="/" class="btn btn-primary" className="bttn">Beli</a>
                    </div>
                </div>
            </div>

            <div class="card">
                <img
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//1093/parcelindonesia_parcelindonesia-s4-parcel-makanan-lebaran_full02.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <h1>Paket B</h1>
                    <h4>4 Syrups / Packaging Juice / Soft Drinks</h4>
                    <h4>5 Chocolates</h4>
                    <h4>5 Snacks / Biscuits</h4>
                    <h4>Kartu Ucapan Dengan Custom Message</h4>
                    <div className="body-button">
                        <a href="/" class="btn btn-primary" className="bttn">Beli</a>
                    </div>
                </div>
            </div>

            <div class="card">
                <img
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//890/parcelindonesia_parcel-lebaran-makanan-kode---s8_full02.jpg"
                    class="card_Img"
                    alt="..."
                />
                <div class="card-body">
                    <h1>Paket C</h1>
                    <h4>6 Syrups / Packaging Juice / Soft Drinks</h4>
                    <h4>8 Chocolates</h4>
                    <h4>8 Snacks / Biscuits</h4>
                    <h4>Kartu Ucapan Dengan Custom Message</h4>
                    <div className="body-button">
                        <a href="/" class="btn btn-primary" className="bttn">Beli</a>
                    </div>
                </div>
            </div>

            <div className="carouselParcel-row">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src="https://www.static-src.com/merchant/uploads/full/120/1606268794106.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src="https://www.static-src.com/merchant/uploads/full/141/1619579495959.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src="https://www.static-src.com/merchant/uploads/full/126/1618559719651.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src="https://www.static-src.com/merchant/uploads/full/109/1610094810760.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="parcel-row"
                            src="https://www.static-src.com/merchant/uploads/full/101/1610094620142.jpg"
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Row1;
