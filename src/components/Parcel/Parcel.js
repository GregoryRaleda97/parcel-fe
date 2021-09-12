import React from 'react';
import './Parcel.css';
import { Link } from 'react-router-dom';
import Image from '../../assets/snackimage.jpg';

function Parcel() {
    return (
        <div>
            <div className="parcel-rows">
                <div className="parcel-banner-first">

                    <div className="parcel-first">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/register'>
                                    <h2>Syrups</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-second">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/register'>
                                    <h2>Packaging Juice</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-third">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/register'>
                                    <h2>Soft Drinks</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="parcel-banner-second">

                    <div className="parcel-first">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/register'>
                                    <h2>Chocolates</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-second">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/register'>
                                    <h2>Snacks</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="parcel-third">
                        <div class="post">
                            <img
                                src={Image}
                                alt=""
                                className="card-parcel-image"
                            />
                            <div class="post-s">
                                <Link to='/register'>
                                    <h2>Biscuits</h2>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Parcel
